import React,{useEffect,useState} from 'react';
import axios from "./axios"
import './App.css';
import Chat from './components/Chat';
import Sidebar from './components/Sidebar';
import Pusher from "pusher-js"

function App() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    axios.get("/messages/sync").then((response)=>{
      console.log("message"+response.data)
       setMessages(response.data)
    });
    
  }, [])
  useEffect(() => {
    var pusher = new Pusher('bad38fb74d41d11aa787', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage)=> {
      setMessages([...messages,newMessage])
    });
    return()=>{
      channel.unbind_all();
      channel.unsubscribe();
    }
  }, [messages])
  return (
    <div className="app">
      <div className="app__body">
      <Sidebar/>
      <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
