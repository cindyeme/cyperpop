import express from "express";
import path from "path";
import cors from 'cors';
const app = express();
const port = process.env.BACKEND_SERVER_PORT || 4000; // default port to listen
import bodyParser from 'body-parser'
import fileRouter from "./routes/fileroute"
import dotenv from "dotenv"
import mongoose from 'mongoose'
dotenv.config()

// mongoose.connect(process.env.DB,
//     {useNewUrlParser:true,useUnifiedTopology:true})
//    .then(()=>console.log('mongodb connected'))
//    .catch((err:any)=>console.log('error =>', err.message));

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')));


//  parse application/json
app.use(bodyParser.json())

app.use("/fileRoute",fileRouter)


// start the express server
app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );
