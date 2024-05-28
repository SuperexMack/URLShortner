const express = require("express");
const router = express.Router();
const UserURLShortner = require("../Schema/db");

const getNanoid = async (size) => {
    const { nanoid } = await import('nanoid');
    return nanoid(size);
};

router.post("/insertURL", async (req, res) => {
    let URL = req.body.InsertedUrl;
    if (!URL) {
        return res.json({
            msg: "Please enter the URL"
        });
    }
    let originalURL = await getNanoid(4);
    // console.log(getNanoid(4))
    await UserURLShortner.create({
        InsertedUrl: originalURL,
        RealURL: URL
    });
    res.json({
        url: originalURL
    });
});

router.get("/:shorterURL", async (req, res) => {
    let shortId = req.params.shorterURL;
    const entry = await UserURLShortner.findOne({ InsertedUrl: shortId });
    if (entry) {
        res.redirect(entry.RealURL);
    } else {
        res.status(404).json({
            msg: "URL not found"
        });
    }
});

module.exports = router;
