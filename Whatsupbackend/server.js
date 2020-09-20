import express from "express"
import mongoose from "mongoose"
import Messages from "./dbMessages.js";
import Pusher from "pusher";
import cors from "cors"
 const app =express();
 
 
 app.use(express.json())
 
 app.use(cors())
const connection_url="mongodb+srv://admin:faBBABoMJpeUEUss@cluster0.bhbwh.mongodb.net/mern?retryWrites=true&w=majority";
mongoose.connect(connection_url,{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
const db=mongoose.connection;
db.once("open",()=>{
    console.log("DB connected");
    const msgCollection=db.collection("messagecontents");
    const changeStream=msgCollection.watch();
    console.log(changeStream);
    changeStream.on("change",(change)=>{
        console.log("hello");
        console.log(change)
        if(change.operationType==="insert"){
            console.log("dasadfadsfga");
            const messageDetails=change.fullDocument;
            pusher.trigger('messages','inserted',{
              name:messageDetails.name,
              message:messageDetails.message,
             timestamp:messageDetails.timestamp,
             received:messageDetails.received          

            })
        }
    })
})
db.once("open",()=>{
    console.log("DB connected");

    const msgCollection=db.collection('messagecontents');
    const changeStream=msgCollection.watch();
})
const port=process.env.PORT||9000

var pusher = new Pusher({
    appId: '1076129',
    key: 'bad38fb74d41d11aa787',
    secret: '84006c031dec2d4346db',
    cluster: 'eu',
    useTLS:true
  });
  
 
 app.get("/",(req,res)=>res.status(200).send("hello world"));
 app.get("/messages/sync",(req,res)=>{
     
     Messages.find((err,data)=>{
         if(err){
            res.status(500).send(err);
         }
         else{
             res.status(200).send(data);
         }
     })
 }
 )
 app.post("/messages/new",(req,res)=>{
     const dbMessage=req.body;
     Messages.create(dbMessage,(err,data)=>{
         if(err){
            res.status(500).send(err);
         }
         else{
            res.status(201).send(data);
         }
     })
 }
 
 );
 app.listen(port,()=>console.log(`Listening on port:${port}`))