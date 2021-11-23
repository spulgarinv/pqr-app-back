const Request = require("../models/requestModel");

exports.listAllRequest = (req, res) => {
    Request.find({}, (err, request) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(200).json(request);
    })
}

exports.createNewRequest = (req, res) => {
    let newRequest = new Request(req.body);
    console.log(req.body)
    newRequest.save((err, request) => {
        if (err) {
            res.status(500).send(err);
        }
        res.status(201).json(request);
    })
}