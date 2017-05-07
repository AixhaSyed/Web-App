<<<<<<< HEAD
const Express =require ('express');
const bodyParser = require ('body-parser')
const app = Express();
const MongoClient = require ('mongodb').MongoClient


// app.use(bodyParser.josn())


var db =
MongoClient.connect('mongodb://<username>:<password>@ds161400.mlab.com:61400/myprojects',(err, database)=>{
    if (err)
    return 
    console.log(err)
    
     db = database
    app.listen(process.env.PORT|| 3000, ()=>
    console.log('listenening on 3000'))
})


app.use(bodyParser.json())
app.use(Express.static('public'))



app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended:true}))

=======
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient

var db

MongoClient.connect('mongodb://Aisha Syed:randomcheaking54726@ds051913.mlab.com:51913/firstdb', (err, database) => {
  if (err) return console.log(err)
  db = database
  app.listen(process.env.PORT || 3000, () => {
    console.log('listening on 3000')
  })
})

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))


>>>>>>> b23801235d08bb941db30046c19804352bff10c0

app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {quotes: result})
  })
})

<<<<<<< HEAD
app.post('/quotes', (req, res)=>
db.collection('quotes').save(req.body , (err , result)=>{
    if (err)
    return 
    console.log (err)
    console.log ('saved tooo database')
    res.redirect('/')
}
))
=======
app.post('/quotes', (req, res) => {
  db.collection('quotes').save(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})
>>>>>>> b23801235d08bb941db30046c19804352bff10c0

app.put('/quotes', (req, res) => {
  db.collection('quotes')
  .findOneAndUpdate({name: 'Yoda'}, {
    $set: {
<<<<<<< HEAD
      Title: req.body.Title,
      AuthorName: req.body.AuthorName,
      BookFormat: req.body.BookFormat,
      Price: req.body.Price 
=======
      name: req.body.name,
      quote: req.body.quote
>>>>>>> b23801235d08bb941db30046c19804352bff10c0
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})

<<<<<<< HEAD

app.delete('/quotes', (req, res) => {
  db.collection('quotes').findOneAndDelete({Title: req.body.delete}, (err, result) => {
=======
app.delete('/quotes', (req, res) => {
  db.collection('quotes').findOneAndDelete({name: req.body.name}, (err, result) => {
>>>>>>> b23801235d08bb941db30046c19804352bff10c0
    if (err) return res.send(500, err)
    res.send('A Book got deleted')
  })
})


<<<<<<< HEAD
        
=======
>>>>>>> b23801235d08bb941db30046c19804352bff10c0





<<<<<<< HEAD
// app.get ('/' , (req, res)  =>{
//     res.sendFile(__dirname + '/index.html')
    
// })



app.listen (3000, function  () {
    console.log("port is 3000");
})
=======





>>>>>>> b23801235d08bb941db30046c19804352bff10c0
