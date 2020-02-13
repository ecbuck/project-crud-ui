const mongoose = require("mongoose");

const SeriesSchema = new mongoose.Schema({
    title: {type: String, required: true},
    genre: {type: String, required: true},
    origin: {type: String, required: true},
    author: {type: String, required: true},
})

module.exports = mongoose.model("Series", SeriesSchema, "Series");