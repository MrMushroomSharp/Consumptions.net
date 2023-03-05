import Express from "express";
import mongoose from "mongoose";
import DishModel from "./models/dish.js";
import Cors from "cors";

const app = Express();
const router = Express.Router();
const cors = Cors();

app.use(cors);
app.use(Express.json())

const PORT = 5001;

mongoose.connect("mongodb+srv://Nelson123:123nelson321KFC@cluster0.4tla0xo.mongodb.net/MainDB?retryWrites=true&w=majority");
app.listen(PORT, console.log(`Server is live on: http://localhost:${PORT}`));


app.get('/', (req, res) => {
    res.status(200).send("Hello World");
});
app.get('/dishes', (req, res,) => {
    DishModel.find({}, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    }).sort({ upvotes: -1 }).clone().catch(function (err) { console.log(err) })
});

app.get('/dishes/find/:name', function (req, res,) {
    DishModel.find({ name: req.params.name }, (err, result) => {
        if (err) {
            res.json(err)
        }
        else {
            res.json(result)
        }
    }).clone().catch(function (err) { console.log(err) })
});