const express = require("express");

const bodyParser = require("body-parser");

const app = express();


const meetupsRoutes = require("./Server/routes/meetups");
const usersRoutes = require("./Server/routes/users");
const questionsRoutes = require("./Server/routes/questions");  


app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(meetupsRoutes);
app.use(usersRoutes);
app.use(questionsRoutes);






app.get("/", (req, res) => {
    return res.json("Start with /user");
});


app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

module.exports = app;