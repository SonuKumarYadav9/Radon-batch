const { count } = require("console")
const bookModel= require("../models/bookModel")
const authorModel =require("../models/authorModel")




const createBook= async function (req, res) {
    let data= req.body

    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}



const basicCode=async function (req, res) {
  console.log("hey man congrats you have reach the handler")
  res.send({msg: "this is coming from the controller"})
}

//4
const getBooksWithAuthorAndPublisherDetails = async function (req,res){
let bookDetail= await bookModel.find().populate("author_id").populate("publisher_id")
res.send({msg:bookDetail})
}


//////////5 a

const books = async function (req,res) {
  let data = bookModel.update({isHardCover:{default:false}},{new:true})  ///not done yet
  res.send({msg:data})
}




// 5 b 
const updatedPriceBy10= async function ( req,res){
  let updatedPrice= await bookModel.update({ratings:{$gte:3.5}},({$set:{price:10}},{new:true}))
  res.send({msg:updatedPrice})
}

module.exports.basicCode= basicCode


module.exports.getBooksWithAuthorAndPublisherDetailst = getBooksWithAuthorAndPublisherDetails
module.exports.createBook= createBook
module.exports.books=books
module.exports.updatedPriceBy10=updatedPriceBy10



           
 














/////this is 8 June assignment im practicing again with better undestanf but allready i submited this

//  const bookByChetanBhagat = async  function (req,res){
//    let listBook = await authorModel.find({author_name:"Cheta Bhagat"}).select("author_id")   
//    let savedbook =  await bookModel.find({author_id:listBook[0].author_id})
//    res.send({msg: savedbook})
   
//  }
//  const book100 = async  function (req,res){
//    let data = await bookModel.findOneAndUpdate({name:"Two states"},{$set: {price:100}},{new :true})
//    let savedData = await authorModel.find({author_id:data.author_id}).select("author_name")
//    let price =data.price
//    res.send({msg:savedData,price})
//  }

//  const abcd = async function(req,res){
//    let abc =await bookModel.find({price:{$gte:50,$lte:100}}).select({author_id:1})
//   let ab = await   


//  }

// const yearsGreaterThan50 = async  function (req,res){
//   let authorList = await authorModel.find({age:{$gt:50}})
//   res.send({msg:authorlist})
// }


// module.exports.book100=book100
// module.exports. yearsGreaterThan50= yearsGreaterThan50





























// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE


