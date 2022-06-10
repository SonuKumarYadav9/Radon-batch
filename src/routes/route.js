const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController= require("../controllers/publisherController")

const express = require('express');



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")

})


 const mid1 =function (req,res,next){

    console.log("hi im middlewere")
    let loggedIn =false
    if (loggedIn==true){
        next()
    }
    else{
        res.send("registered with email")
    }
 }

 const mid2 =function (req,res,next){

    console.log("hi im middlewere 2")
    next()
 }

 const mid3 =function (req,res,next){

    console.log("hi im middlewere333")
    next()
 }

 var url = require('url');

//auth required or redirect
app.use('/basicCode', function(req, res, next) {
    var path = url.bookController(req.url).pathname;
    if ( !req.session.user ) {
      res.redirect('/login?ref='+path);
    } else {
      next();
    }
});

app.use('/', route);

 router.get("/basicCode",mid1,mid2,mid3, bookController.basicCode)


















router.post("/createAuthor", authorController.createAuthor  )


router.get("/getAuthorsData", authorController.getAuthorsData)





module.exports = router;