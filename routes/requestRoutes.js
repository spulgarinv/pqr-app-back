module.exports = function(app) {
    var requestList = require("../controllers/requestController");

    app
    .route("/request")
    .get(requestList.listAllRequest)
    .post(requestList.createNewRequest);
}