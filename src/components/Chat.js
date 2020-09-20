import React,{useState} from 'react'
import "./chat.css"
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';
import {IconButton} from "@material-ui/core"
import MoodIcon from '@material-ui/icons/Mood';
import MicIcon from '@material-ui/icons/Mic';
import Axios from '../axios';
function Chat({messages}) {
    const [input, setInput] = useState("")
    const sendMessage=async(e)=>{
        e.preventDefault();
        await Axios.post("/messages/new",{
           message:input,
           name:"anonymus",
           timestamp:new Date().toUTCString(),
           received:true
        })
        setInput("");
    }
    return (
        <div className="chat">
           <div className="chat__header">
           <PersonIcon></PersonIcon>
           <div className="chat__headerInfo">
                
               <h3>Room name</h3>
               <p>Last seen at..</p>
           </div>
           <div className="chat__headerRight">
               <IconButton>
                <SearchIcon/>
                </IconButton>
                <IconButton>
                <AttachFileIcon/>
                </IconButton>
                <IconButton>
                <MoreVertIcon/>
                </IconButton>
           </div>
           </div>
           
           
           <div className="chat__body">
               {messages.map((message)=>(
                   console.log(message.received),
                <p className={`chat_message ${message.received && "chat__reciever"}`} >
                    <span className="chat__name">
                        {message.name}
                    </span>
                   
                        {message.message}
                    
                    <span className="chat__timestamp">
                        {message.timestamp}
                    </span>
                   
                </p>
                )) } 
           </div>
           <div className="chat__footer">
                    <MoodIcon></MoodIcon>
                    <form>
                        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="type the message" type="text"/>
                        <button disabled={!input} onClick={sendMessage} type="sumbit"> <IconButton><SendIcon/></IconButton></button>
                        
                    </form>
                    <MicIcon/>
                </div>

        </div>
    )
}

export default Chat
