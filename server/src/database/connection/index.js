require("dotenv").config();
const { DB_URL } = require("../../config/index");
const mongoose = require("mongoose");

module.exports.connectionFun = async () => {
    try {
        const DB_URL = 'mongodb://localhost:27017/assesment';

        await mongoose.connect(DB_URL);

        console.log("Database is connected");

        return true;

    } catch (error) {
        console.log("Error while connecting the DB ===>>", error);
        return false;
    }
}