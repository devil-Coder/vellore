/**
 * Created by Raj Chandra on 11/4/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var placeSchema = new Schema({
    name: {
        type : String,
        required: true
    },
    imageUrl: [{
        type : String,
        required: true
    }],
    knownFor : {
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

var place = module.exports = mongoose.model( 'place' , placeSchema );

//Show data
module.exports.getData=function (callback,limit) {
    place.find(callback).limit(limit);
}
//Find data by id
module.exports.getDataById=function (id, callback) {
    place.findOne({_id : id}, callback);
}
