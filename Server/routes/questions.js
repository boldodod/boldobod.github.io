const express = require("express");

const router = express.Router();

const  questions = [];

let id = 0;

router.get("/questions", (req, res) => {
    return res.json({questions});
});

router.get("/questions/:id", (req, res) => {
    const question = questions.find(val => val.id === Number(req.params.id));
    return res.json({question});
});

router.post("/questions", (req, res) => {
    users.push({
        id: ++id,
        createdOn: Date.now(),
        createdBy: users.id,
        meetup: meetups.id,
        title: req.body.title,
        body: req.body.body,
        votes: 0,
        admin: Boolean
    });
    return res.json({status: "200", message: "Created"});
});

router.patch("/questions/:id", (req, res) => {
    const question = question.find(val => val.id === Number(req.params.id));
        question.name=  req.body.name;
        return res.json({message: "Updated"});
});

router.delete("/questions/:id", (req, res) => {
    const questionIndex = questions.findIndex(val => val.id === Number(req.params.id));
    questions.splice(questionIndex, 1);
    return res.json({message: "Deleted"});
});

module.exports = router;
