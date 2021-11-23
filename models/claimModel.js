const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ClaimSchema = new Schema({
    description: {
        type:String,
        required:true
    },
    createdOn: {
        type:Date,
        default: Date.now
    }
});

module.exports = mongoose.model("claimModel", ClaimSchema);