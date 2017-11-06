/**
 * Created by Raj Chandra on 11/4/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var outletSchema = new Schema({
    name: {
        type : String,
        required: true
    },
    imageUrl: [{
        type : String,
        required: true
    }],
    detail : {
        type: String
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
        commentedBy: {type: String,default : "Visitor"},
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

var outlet = module.exports = mongoose.model( 'outlet' , outletSchema );

//Show data
module.exports.getData=function (callback,limit) {
    outlet.find(callback).limit(limit);
}
//Find data by id
module.exports.getDataById=function (id, callback) {
    outlet.findOne({_id : id}, callback);
}
