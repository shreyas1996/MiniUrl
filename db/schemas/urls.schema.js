'use strict';



const url = {
    "_id": {
        type: String,
        trim: true
    },
    "originalUrl" :{
        type: String,
        trim: true
    },
    "urlId" :{
        type: String,
        trim: true
    },
    "mOn": {
        type: Date,
        default: Date.now
    }
};

module.exports = url;