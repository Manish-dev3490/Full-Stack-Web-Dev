const express = require("express");

const app = express();

app.use(express.json());


// 🔥 Common middleware for all /user routes
app.use("/user", (req, res, next) => {
    console.log("Middleware chala → Authentication + Authorization check");

    const isLoggedIn = true;

    if (!isLoggedIn) {
        return res.send("Login Required");
    }

    next(); // request ko aage bhej do actual route handler ke paas
});


// GET → user profile dekhna
app.get("/user", (req, res) => {
    res.send("GET Request → User Profile Data");
});


// POST → new post create karna
app.post("/user", (req, res) => {
    console.log(req.body);
    res.send("POST Request → New Post Created");
});


// PUT → full profile update
app.put("/user", (req, res) => {
    res.send("PUT Request → Full User Profile Updated");
});


// PATCH → partial update (username, bio etc.)
app.patch("/user", (req, res) => {
    res.send("PATCH Request → Partial User Update");
});


// DELETE → account ya post delete
app.delete("/user", (req, res) => {
    res.send("DELETE Request → User/Post Deleted");
});


app.listen(3000, () => {
    console.log("Server running on port 3000");
});