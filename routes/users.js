const express = require("express");

const router = express.Router();

const  users = [];

let id = 0;

router.get("/api/v1/users", (req, res) => {
    return res.json({users, status: 200, message: "User profile fectched"});
});

router.get("/api/v1/users/:id", (req, res) => {
    const user = users.find(val => val.id === Number(req.params.id));
    return res.json({user, status: 200, message: "User Details DOWNLOADED successfully"});
});

router.post("/api/v1/users", (req, res) => {
    users.push({
        id: ++id,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        othername: req.body.othername,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        registered: Date.now(),
        admin:  req.body.admin,
    });
    return res.json({status: 200, message: "User has been successfully ADDED to List of users"});
});

router.delete("/api/v1/users/:id", (req, res) => {
    const userIndex = users.findIndex(val => val.id === Number(req.params.id));
    users.splice(userIndex, 1);
    return res.json({status: 202, message: "User has been DELETED from List of users"});
});

module.exports = router;
