const express = require("express");
const app = express();

const foodItems = [
    { id: 1, foodName: "Paneer Butter Masala", restaurantName: "Spice Garden", price: 250 },
    { id: 2, foodName: "Veg Biryani", restaurantName: "Royal Kitchen", price: 180 },
    { id: 3, foodName: "Margherita Pizza", restaurantName: "Pizza Hub", price: 320 },
    { id: 4, foodName: "Masala Dosa", restaurantName: "South Treat", price: 120 },
    { id: 5, foodName: "Chole Bhature", restaurantName: "Punjabi Dhaba", price: 140 },
    { id: 6, foodName: "Pav Bhaji", restaurantName: "Mumbai Street", price: 160 },
    { id: 7, foodName: "Burger Combo", restaurantName: "Burger Point", price: 210 },
    { id: 8, foodName: "Hakka Noodles", restaurantName: "Chinese Bowl", price: 190 },
    { id: 9, foodName: "Spring Rolls", restaurantName: "Dragon Wok", price: 170 },
    { id: 10, foodName: "Dal Makhani", restaurantName: "Desi Tadka", price: 220 },
    { id: 11, foodName: "Tandoori Roti", restaurantName: "Desi Tadka", price: 25 },
    { id: 12, foodName: "Cold Coffee", restaurantName: "Cafe Brew", price: 150 },
    { id: 13, foodName: "Chocolate Shake", restaurantName: "Shake World", price: 130 },
    { id: 14, foodName: "White Sauce Pasta", restaurantName: "Italian Corner", price: 280 },
    { id: 15, foodName: "Samosa Plate", restaurantName: "Snack Junction", price: 60 },
    { id: 16, foodName: "Rajma Chawal", restaurantName: "Ghar Ka Swad", price: 170 },
    { id: 17, foodName: "Aloo Paratha", restaurantName: "Breakfast House", price: 90 },
    { id: 18, foodName: "Momos", restaurantName: "Tibetan Bites", price: 110 },
    { id: 19, foodName: "Falooda", restaurantName: "Sweet Nation", price: 140 },
    { id: 20, foodName: "Gulab Jamun", restaurantName: "Mithas Sweets", price: 80 }
];
app.use(express.json());
app.listen(3000, () => {
    console.log("i am listening on the port 3000");

})

app.get("/food", (req, res) => {
    res.send(foodItems);
})

app.get("/food/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const data = foodItems.find((item) => item.id === id);
    if (!data) res.send("data is not found");
    else res.send(data);
})


app.post("/food", (req, res) => {
    const data = req.body;
    console.log(data);
    if (data) {
        foodItems.push(data);
        res.send("yor data is pushed into the database");
    }
    else res.send("your operations is bnot suceed");

})

app.patch("/food", (req, res) => {
    const data = req.body;
    const food = foodItems.find((food) => food.id === data.id);
    if (food) {
        food.foodName = data.foodName;
        food.price = data.price;
        res.send("your data is updated");
    }
    else res.send("your data is not updatted")
})

app.delete("/food", (req, res) => {
    const id = req.body.id;
    console.log(id);

    const deleteddata = foodItems.findIndex((food) => food.id === id);

    if (deleteddata !== -1) {
        foodItems.splice(deleteddata, 1);
        res.send("your given data is deleted");
    } else {
        res.send("your data is not deleted for some reasons");
    }
});