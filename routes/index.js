var express = require('express');
var router = express.Router();
var places = require('../models/places.js');
var bank = require('../models/bank.js');
var comments = require('../models/comments.js');
var hospitals = require('../models/hospital.js');
var hotels = require('../models/hotel.js');
var outlets = require('../models/outlets.js');
var travel = require('../models/travel.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  places.find({}).exec(function(err,doc){
    if(err)
      throw err;
    res.render('index', {
        title: 'Express',
        bank : "",
        comments: "",
        hospitals : "",
        hotels : "",
        outlets : "",
        travel : "",
        places : doc
    });
  })
});

router.get('/:name/:_id',function(req,res,next){
    var detailId =req.params._id;
    switch(req.params.name){
        case 'bank':
            bank.find({'_id' : detailId}).exec(function(error,oneItem){
                if(error)
                    throw error;
                res.render('detailed',{
                    title: 'Bank' ,
                    detail : oneItem[0]
                });
            });
            break;
        case 'comments':
            break;
        case 'hospitals':
            hospitals.find({'_id' : detailId}).exec(function(error,oneItem){
                if(error)
                    throw error;
                res.render('detailed',{
                    title: 'Bank' ,
                    detail : oneItem[0]
                });
            });
            break;
        case 'hotels':
            hotels.find({'_id' : detailId}).exec(function(error,oneItem){
                if(error)
                    throw error;
                res.render('detailed',{
                    title: 'Bank' ,
                    detail : oneItem[0]
                });
            });
            break;
        case 'outlets':
            outlets.find({'_id' : detailId}).exec(function(error,oneItem){
                if(error)
                    throw error;
                res.render('detailed',{
                    title: 'Bank' ,
                    detail : oneItem[0]
                });
            });
            break;
        case 'places':
            places.find({'_id' : detailId}).exec(function(error,oneItem){
                if(error)
                    throw error;
                res.render('detailed',{
                    title: 'Bank' ,
                    detail : oneItem[0]
                });
            });
            break;
        case 'travel':
            travel.find({'_id' : detailId}).exec(function(error,oneItem){
                if(error)
                    throw error;
                res.render('detailed',{
                    title: 'Bank' ,
                    detail : oneItem[0]
                });
            });
            break;
        default:
            res.render('index');
    }
})


router.get('/bank', function(req, res, next) {
    bank.find({}).exec(function(err,doc){
        if(err)
            throw err;
        res.render('index', {
            title: 'Express',
            bank : doc,
            places : "",
            comments: "",
            hospitals : "",
            hotels : "",
            outlets : "",
            travel : ""
        });
    })
});

router.get('/hospitals',function(req,res,next){
    hospitals.find({}).exec(function(err,doc){
        if(err)
            throw err;
        res.render('index', {
            title: 'Express',
            hospitals : doc,
            bank : "",
            comments: "",
            places : "",
            hotels : "",
            outlets : "",
            travel : ""
        });
    })
})

router.get('/hotels',function(req,res,next){
    hotels.find({}).exec(function(err,doc){
        if(err)
            throw err;
        res.render('index', {
            title: 'Express',
            hotels : doc,
            bank : "",
            comments: "",
            places : "",
            outlets : "",
            travel : "",
            hospitals : ""
        });
    })
})

router.get('/report',function(req,res,next){
    comments.find({}).exec(function(err,doc){
        if(err)
            throw err;
        res.render('index', {
            title: 'Express',
            comments : doc,
            bank : "",
            hospitals : "",
            places : "",
            hotels : "",
            outlets : "",
            travel : ""
        });
    })
})

router.get('/outlets',function(req,res,next){
    outlets.find({}).exec(function(err,doc){
        if(err)
            throw err;
        res.render('index', {
            title: 'Express',
            outlets : doc,
            bank : "",
            comments: "",
            places : "",
            hotels : "",
            hospitals : "",
            travel : ""
        });
    })
})

router.get('/travel',function(req,res,next){
    travel.find({}).exec(function(err,doc){
        if(err)
            throw err;
        res.render('index', {
            title: 'Express',
            travel : doc,
            bank : "",
            comments: "",
            places : "",
            hotels : "",
            outlets : "",
            hospitals : ""
        });
    })
})
router.get('/add',function(req,res,next){
    res.render('add');
})
router.post('/addb',function(req,res,next){
    var data = new bank({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        detail : req.body.detail,
        atm : req.body.atm,
        longitude : req.body.longitude,
        latitude : req.body.latitude,
        rating : req.body.rating
    });
    data.save(function (err, success) {
        if (err) {
            throw err;
        }
        else {
            res.render('add');
        }
    });
})
router.post('/addc',function(req,res,next){
    var data = new comments({
        commentOn: req.body.commentOn,
        commentDetail: req.body.commentDetail,
        commentedBy : req.body.commentedBy
    });
    data.save(function (err, success) {
        if (err) {
            throw err;
        }
        else {
            res.render('add');
        }
    });
})

router.post('/addhos',function(req,res,next){
    var data = new hospitals({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        detail : req.body.detail,
        category : req.body.category,
        longitude : req.body.longitude,
        latitude : req.body.latitude,
        rating : req.body.rating
    });
    data.save(function (err, success) {
        if (err) {
            throw err;
        }
        else {
            res.render('add');
        }
    });
})
router.post('/addhot',function(req,res,next){
    var data = new hotels({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        detail : req.body.detail,
        longitude : req.body.longitude,
        latitude : req.body.latitude,
        rating : req.body.rating
    });
    data.save(function (err, success) {
        if (err) {
            throw err;
        }
        else {
            res.render('add');
        }
    });
})

router.post('/addo',function(req,res,next){
    var data = new outlets({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        detail : req.body.detail,
        longitude : req.body.longitude,
        latitude : req.body.latitude,
        rating : req.body.rating
    });
    data.save(function (err, success) {
        if (err) {
            throw err;
        }
        else {
            res.render('add');
        }
    });
})


router.post('/addp',function(req,res,next){
    var data = new places({
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        detail : req.body.detail,
        longitude : req.body.longitude,
        latitude : req.body.latitude,
        rating : req.body.rating
    });
    data.save(function (err, success) {
        if (err) {
            throw err;
        }
        else {
            res.render('add');
        }
    });
})

router.post('/addt',function(req,res,next){
    var data = new travel({
        rno: req.body.rno,
        to: req.body.to,
        from : "Vellore",
        via : req.body.via,
        fare : req.body.fare,
        timing : req.body.timing
    });
    data.save(function (err, success) {
        if (err) {
            throw err;
        }
        else {
            res.render('add');
        }
    });
})
module.exports = router;
