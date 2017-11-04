/**
 * Created by Raj Chandra on 11/4/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bankSchema = new Schema({
    name: {
        type : String,
        required: true
    },
    imageUrl: [{
        type : String,
        required: true
    }],
    detail : {
        type : String
    },
    atm: {
        type : String,
        required: true
    },
    longitude: {
        type : String,
        required: true
    },
    latitude: {
        type : String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    },
    rating : {
        type : Number
    }
});

module.exports = mongoose.model('bank', bankSchema);

//Show data
module.exports.getData=function (callback,limit) {
    bank.find(callback).limit(limit);
}
//Find data by id
module.exports.getDataById=function (id, callback) {
    bank.findOne({_id : id}, callback);
}