
const cors = require("cors");
const dotenv = require("dotenv");
const helmet = require("helmet");
const router = require("./routes");

const dbConnection = require("../models");

const express = require("express");
const UrlService = require("./services/UrlService");
dotenv.config();


const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 53002;

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());


app.use("/api", router);
app.get("/:short_code", async (req, res) => {
    const urlService = new UrlService();
    const url = await urlService.findUrl(req.params.short_code);
    if (url != null) {
        res.redirect(url.full_url).status(301);
    }
    else {
        res.sendFile(__dirname + "/html/404.html").status(404);
    }
})
app.get("/", function (req, res) {
    res.send("Ok!").status(200);
});


// let urlService = new UrlService();
// let shortened = urlService.shorten("https://www.simbibot.com");
// console.log(shortened);


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
