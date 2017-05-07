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


app.get('/', (req, res) => {
  db.collection('quotes').find().toArray((err, result) => {
    if (err) return console.log(err)
    res.render('index.ejs', {quotes: result})
  })
})

app.post('/quotes', (req, res)=>
db.collection('quotes').save(req.body , (err , result)=>{
    if (err)
    return 
    console.log (err)
    console.log ('saved tooo database')
    res.redirect('/')
}
))

app.put('/quotes', (req, res) => {
  db.collection('quotes')
  .findOneAndUpdate({name: 'Yoda'}, {
    $set: {
      Title: req.body.Title,
      AuthorName: req.body.AuthorName,
      BookFormat: req.body.BookFormat,
      Price: req.body.Price 
    }
  }, {
    sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
  })
})


app.delete('/quotes', (req, res) => {
  db.collection('quotes').findOneAndDelete({Title: req.body.delete}, (err, result) => {
    if (err) return res.send(500, err)
    res.send('A Book got deleted')
  })
})


        





// app.get ('/' , (req, res)  =>{
//     res.sendFile(__dirname + '/index.html')
    
// })



app.listen (3000, function  () {
    console.log("port is 3000");
})