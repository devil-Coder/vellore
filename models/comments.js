/**
 * Created by Raj Chandra on 11/4/2017.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    commentOn : {
        type: String,
        required : true
    },
    commentDetail: {
        type : String,
        required: true
    },
    commentedBy: {
        type : String,
        required: true,
        default : "Visitor"
    },
    support: {
        type: Number,
        default : 0
    },
    disapprove : [{
        count :{
            type:Number,
            default : 0
        },
        reason : {
            type:String
        }
    }],
    date:{
        type:Date,
        default: Date.now
    }
});

module.exports = mongoose.model('comment', commentSchema);

//Show data
module.exports.getData=function (callback,limit) {
    comment.find(callback).limit(limit);
}
//Find data by id
module.exports.getDataById=function (id, callback) {
    comment = findOne({_id : id}, callback);
}
