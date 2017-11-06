/**
 * Created by Raj Chandra on 11/4/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var travelSchema = new Schema({
    rno: {
        type : String
    },
    to: {
        type : String,
        required: true
    },
    from: {
        type : String,
        default : "Vellore"
    },
    via :{
        type: String,
        default : " "
    },
    fare : {
        type : String
    },
    timing: {
        type : String
    },

    date:{
        type:Date,
        default: Date.now
    }
});

module.exports = mongoose.model('travel', travelSchema);

//Show data
module.exports.getData=function (callback,limit) {
    travel.find(callback).limit(limit);
}
//Find data by id
module.exports.getDataById=function (id, callback) {
    travel.findOne({_id : id}, callback);
}