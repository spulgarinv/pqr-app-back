const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const RequestSchema = new Schema({
    type: {
        type:String,
        required:true
    },
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    email: {
        type:String,
        required:true
    },
    celular: {
        type:Number,
        required:true
    },
    description: {
        type:String,
        required:true
    },
    claim: [{
        type:mongoose.Schema.Types.ObjectId,
        ref:"claimModel",
        required:false
    }],
    createdOn: {
        type:Date,
        default: Date.now
    }
})

module.exports = mongoose.model("requestModel", RequestSchema);