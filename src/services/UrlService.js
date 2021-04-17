const db = require("../../models");
const dotenv = require("dotenv");
dotenv.config();


class UrlService{
    urlPrefix = process.env.SITE_URL;    
    async shorten(url){
        const existingUrl = await db.ShortLink.findOne({
            where: {full_url: url}
        });
        if (existingUrl != null){
            return existingUrl;
        }
        let shortString = new Date().valueOf().toString(36);
        
        let shortUrl = this.treatBaseUrlPrefix() + "" + this.treatShortString(shortString);
        const shortLink = db.ShortLink.build({
            full_url: url,
            short_url: shortUrl,
            short_code: shortString,
            clicks: 0
        });
        await shortLink.save();
        return shortLink;
    }

    async findUrl(shortCode){
        const existingUrl = await db.ShortLink.findOne({
            where: { short_code: shortCode }
        });

        if (existingUrl != null){
            existingUrl.clicks += 1;
            await existingUrl.save();
        }
        

        return existingUrl;
    }

    treatBaseUrlPrefix(){
        
        if (this.urlPrefix.endsWith("/")){
            return this.urlPrefix;
        }
        return this.urlPrefix + "/";
        
    }

    treatShortString(shortString){
        const trimChar = (str, chars) => str.split(chars).filter(Boolean).join(chars);
        if (shortString.startsWith("/")){
            return trimChar(shortString, "/");
        }
        return shortString;

        
    }
}

module.exports = UrlService;