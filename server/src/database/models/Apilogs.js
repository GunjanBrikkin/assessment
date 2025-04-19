const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const apiLogSchema = new Schema({
    base_method: String,
    base_url: String,
});

const modelCreate = mongoose.model("API_log", apiLogSchema);
module.exports = modelCreate;