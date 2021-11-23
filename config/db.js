const mongoose = require('mongoose');

var uri = "mongodb+srv://db-admin:abcd123*.@pqrapp.vhcbd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

mongoose.connect(uri, options).then(() => {
    console.log("Database connection established!");
},
err => {
    console.log("Error connecting Database instance due to:", err)
})