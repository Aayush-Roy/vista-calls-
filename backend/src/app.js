import express from 'express';
import {createServer} from "node:http";
// import {Server} from "socket.io";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/users.routes.js";
import { connectToSocket } from './controllers/socketManager.js';
const app = express();
const server = createServer(app);
const io = connectToSocket(server);

app.set("port", (process.env.PORT || 8000));
app.use(cors());
app.use(express.json({limit:"40kb"}))
app.use(express.urlencoded({limit:"40kb", extended:true}));

app.use("/api/v1/users",userRoutes);

const start = async()=>{
    const connectionDb = await mongoose.connect("mongodb+srv://ar0671362:b6tbf7Xn3-Y-WzT@cluster0.txuw4.mongodb.net/")
    console.log(`Mongo Conncted DB Host: ${connectionDb.connection.host}`)
    server.listen(app.get("port"),()=>{
        console.log(`LISTENING ON PORT 8000`)
    })
}

start();