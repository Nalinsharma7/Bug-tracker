require('dotenv').config();
//require the library
const mongoose = require('mongoose');


//connect to the database
mongoose.connect('mongodb://localhost:27017/Bug', 
  {
    usenewurlparser: true,
    useunifiedtopology: true
  }).then(()=>{
    console.log(`connection successful `);
  }).catch((err)=>{
    console.log(`error connecting to database` , err);
  })
 

