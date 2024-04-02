const app = require('./app');
const db = require('./config/db');
const UserModel  = require('./model/user.model')
const LocationModel  = require('./model/location.model')
const cors = require('cors');



app.use(cors()); // Allow requests from all origins

app.use(cors({
       //origin: 'http://localhost:63835/',
       methods: ['GET', 'POST'],
       allowedHeaders: ['Content-Type', 'Authorization'],
       credentials: true
     }));

const port = 3054;

app.listen(port,()=>{
    console.log(`Server listening on Port http://localhost:${port}`);
});