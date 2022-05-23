  const express= require('express');
  const mongoose= require('mongoose');
  const bodyParser= require('body-parser');
  const port=3000;
  const app= express();
  const User=require('./models/User');
  mongoose.connect('mongodb://localhost/userData', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
})

app.use(bodyParser.json());


// CREATE
app.post('/users',(req,res)=>{
  User.create(
    {
      name:req.body.newData.name,
      email:req.body.newData.email,
      password:req.body.newData.password
    },
    (err,data)=>{
      if (err){
        res.json({success: false,message: err})
      } else if (!data){
        res.json({success: false,message: "Not Found"})
      } else {
        res.json({success: true,data: data})
      }
    })
  })
  
  app.route('/users/:id')
  // READ
  // READ
  .get((req,res)=>{
    User.findById(req.params.id,(err,data)=>{
      if (err){
        res.json({
          success: false,
          message: err
        })
      } else if (!data){
        res.json({
          success: false,
          message: "Not Found"
        })
      } else {
        res.json({
          success: true,
          data: data
        })
      }
    })
  })
  // UPDATE
  .put((req,res)=>{
    console.log('in')
    res.json({success: true,data: 'data'})
    // User.findByIdAndUpdate()
  })
  // DELETE
  .delete((req,res)=>{
    // User.findByIdAndDelete()
  })
  
  app.listen(port, ()=>{
    console.log(`server is listening on port:${port}`)
  })
  