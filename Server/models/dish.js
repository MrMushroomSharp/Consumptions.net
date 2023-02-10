import mongoose from "mongoose";

const DishSchema = new mongoose.Schema({
    name: {
        type: String,
        required: mongoose.set('strictQuery', false),
    },
    description: {
        type: String,
        required: mongoose.set('strictQuery', false),
    },
    upvotes: {
        type: Number,
        required: mongoose.set('strictQuery', true),
    }
});

const DishModel = mongoose.model("Dishes", DishSchema);
export default DishModel;