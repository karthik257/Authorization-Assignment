const mongoose = require('mongoose');

const connect = () => {
    return new mongoose.connect("mongodb://127.0.0.1:27017/authAssignment");
}

module.exports = connect;