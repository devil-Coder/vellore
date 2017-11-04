/**
 * Created by Raj Chandra on 11/4/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var hotelSchema = new Schema({
    name: {
        type : String,
        required: true
    },
    detail : {
        type:String
    },
    imageUrl : [{
        type : String,
        required: true
    }],
    region : {
        type: String,
        required : true,
        default : "Indian"
    },
    specails : [{
        item : {type: String}
    }],
    category: {
        type : String,
        required : true,
        default : "non - vegetarian"
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

var hotel = module.exports = mongoose.model( 'hotel' , hotelSchema );

//Show data
module.exports.getData=function (callback,limit) {
    hotel.find(callback).limit(limit);
}
//Find data by id
module.exports.getDataById=function (id, callback) {
    hotel.findOne({_id : id}, callback);
}
