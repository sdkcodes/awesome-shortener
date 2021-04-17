var assert = require('assert');
const UrlService = require('../src/services/UrlService');

describe("Shorten URL", function(){
    it("should return shorturl", async function(){
        let urlService = new UrlService();
        const shortlink = await urlService.shorten("https://www.getcarbon.io");
        assert.strictEqual(shortlink.short_code.length, 8)
    })
})