const apiLogsModel = require("../database/models/Apilogs");

module.exports = async (req, res, next) => {
    const logging = new apiLogsModel({
        base_method: req.method,
        base_url: req.url
    });

    console.log("logging", logging)

    await logging.save();
    return next();
};