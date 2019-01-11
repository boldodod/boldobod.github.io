const express = require("express");

const router = express.Router();

const  meetups = [];

let id = 0;

router.get("/api/v1/meetups", (req, res) => {
    return res.json({meetups, status: 200, message: "list of MEET-UPS DOWNLOAD SUCCESSFULLY"});
});

router.get("/api/v1/meetups/:id", (req, res) => {
    const meetup = meetups.find(val => val.id === Number(req.params.id));
    return res.json({meetup, status: 200, message: "MEET-UP Details DOWNLOADED SUCCESSFULLY"});
});

router.post("/api/v1/meetups", (req, res) => {
    meetups.push({
        id: ++id,
        createdOn: Date.now(),
        locaton: req.body.location,
        images: ["image1.png", "image2,png"],
        topic: req.body.topic,
        happeningOn: 10/10/2019,
        tags: req.body.tags
    });
    return res.json({status: 200, message: "MEET-UPS have been successfully ADDED to List of MEET-UPS"});
});

router.delete("/api/v1/meetups/:id", (req, res) => {
    const meetupIndex = meetups.findIndex(val => val.id === Number(req.params.id));
    meetups.splice(meetupIndex, 1);
    return res.json({status: 200, message: "meet-up has been DELETED from List of MEET-UPS"});
});

module.exports = router;

