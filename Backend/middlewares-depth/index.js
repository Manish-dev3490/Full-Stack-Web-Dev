const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log("i am listening on the port 3000");
})


app.use("/", function (req, res, next) {
    next();
})

app.get("/user", (req, res) => {
    res.send("i am the user 1");
})

app.post("/user", (req, res) => {
    res.send("i am the user");
})


app.put("/user", (req, res) => {
    res.send("i am the user");
})

app.patch("/user", (req, res) => {
    res.send("i am the user");
})
