/**
 * Created by Raj Chandra on 06-11-2017.
 */
var express = require('express');
var router = express.Router();

var bank = require('../models/bank.js');

/* GET home page. */
router.post('/comments/:_id', function(req, res, next) {
    bank.find({"_id": "59fef105734d1d63bdd26b57"},function(err,doc){
        var comment = {commentedBy: req.body.commentedBy, commentDetail: req.body.commentDetail,commentOn : doc.name};
        bank.update(
            {"_id": "59fef105734d1d63bdd26b57"},
            {$push: {comments : comment}},
            function (err, data) {
                if (err) throw(err);
                res.send("success !!")
            });
    });
});

module.exports = router;