import React from 'react'
import "./Sidebar.css"
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import { IconButton } from '@material-ui/core';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import SearchIcon from '@material-ui/icons/Search';
import SidebarChat from "./SidebarChat"
function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebar__header">
           <IconButton>
               <PersonIcon/>
               </IconButton>
               <div className="sidebar__headerRight">
                   <IconButton>
                    <DonutSmallIcon/>
                </IconButton>
                <IconButton>
                    <ChatIcon/>
                </IconButton>
                <IconButton>
                    <MoreVertIcon/>
                </IconButton>
               </div>
           
            </div>
            <div className="sidebar__search">
               <div className="sidebar__searchContainer">
                    <SearchIcon/>   
                    <input placeholder="search" type="text"></input>
               </div>
           </div>
           <div className="sidebar__chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
           </div>
        </div>
    )
}

export default Sidebar
