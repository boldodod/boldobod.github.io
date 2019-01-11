const express = require("express");

const router = express.Router();

const  meetups = [];

let id = 0;

router.get("/meetups", (req, res) => {
    return res.json({meetups});
});

router.get("/meetups/:id", (req, res) => {
    const meetup = meetups.find(val => val.id === Number(req.params.id));
    return res.json({meetup});
});

router.post("/meetups", (req, res) => {
    meetups.push({
        id: ++id,
        createdOn: Date.now(),
        location: req.body.location,
        topic: req.body.topic,
        happeningOn: 9/9/19,
        Tags: req.body.tags
    });
    return res.json({ message: "Created" });
});

router.patch("/meetups", (req, res) => {
    const meetup = meetups.find(val => val.id === Number(req.params.id));
        meetup.name=  req.body.name;
        return res.json({message: "Updated"});
});

router.delete("/meetups/:id", (req, res) => {
    const meetupIndex = meetups.findIndex(val => val.id === Number(req.params.id));
    meetups.splice(meetupIndex, 1);
    return res.json({message: "Deleted"});
});

module.exports = router;

