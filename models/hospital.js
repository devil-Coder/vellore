/**
 * Created by Raj Chandra on 11/4/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hospitalSchema = new Schema({
    name: {
        type : String,
        required: true
    },
    detail : {
        type:String
    },
    imageUrl: [{
        type : String,
        required: true
    }],
    category: {
        type : String,
        required : true
    },
    latitude: {
        type : String,
        required: true
    },
    longitude: {
        type : String,
        required: true
    },
    rating : {
        type : Number
    },
    comments : [{
        commentDetail: {type: String},
        commentedBy: {type: String},
        support: {type: Number},
        disapprove : [{
            count :{type:Number},
            reason : {type:String}
        }]
    }],
    date:{
        type:Date,
        default: Date.now
    }
});

var hospital = module.exports = mongoose.model( 'hospital' , hospitalSchema );

//Show data
module.exports.getData=function (callback,limit) {
    hospital.find(callback).limit(limit);
}
//Find data by id
module.exports.getDataById=function (id, callback) {
    hospital.findOne({_id : id}, callback);
}
