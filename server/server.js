const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());
const cors = require('cors');
app.use(cors('http://localhost:5022'));

//connect to database
const connectDB = require('./config/connectDB');
connectDB();

//routes
app.use('/api/user', require('./routes/userRoute'))
app.use('/api/customer', require('./routes/customerRoute'))
app.use('/api/influencer' , require('./routes/influencerRoute'))
//server creation
const port= process.env.PORT || 5022;
app.listen(port, (err) =>
err? console.error(err): console.log(`server is running on port ${port}`)
);



