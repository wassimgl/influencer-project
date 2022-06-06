const cors = require('cors');
const express = require('express');
const path = require('path');
const app = express();
require('dotenv').config();
app.use(express.json());
app.use(cors('http://localhost:5022'));

//connect to database
const connectDB = require('./config/connectDB');
connectDB();



//routes
app.use('/api/user', require('./routes/userRoute'))
app.use('/api/customer', require('./routes/customerRoute'))
app.use('/api/influencer' , require('./routes/influencerRoute'))


// rendring the front end
app.use(express.static(path.join(__dirname,'../','client','build')));
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname,'../','client','build','index.html'))
});



//server creation
const port= process.env.PORT || 5022;
app.listen(port, (err) =>
err? console.error(err): console.log(`server is running on port ${port}`)
);

