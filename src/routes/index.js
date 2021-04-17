const express = require("express");

const router = express.Router();
const { body, validationResult, check } = require('express-validator');
const UrlService = require("../services/UrlService");

router.post("/shorten", check("url")
    .isURL().withMessage("You must send a valid url")
    .notEmpty()
    .withMessage("The url must not be empty"), 
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const urlService = new UrlService();
        const shortLink = await urlService.shorten(req.body.url);
        res.json({
            status: "success",
            message: "Shortlink created",
            data: shortLink
        }).status(200);
});

router.get("/:short_code", async (req, res) => {
    const urlService = new UrlService();
    const url = await urlService.findUrl(req.params.short_code);
    if (url != null){
        res.json({
            status: "success",
            message: "Url found",
            data: url
        }).status(200)
    }
    else{
        res.json({
            status: "error",
            message: "The url doesn't exist",
            data: ""
        }).status(404);
    }
})
module.exports = router;
// export router;
