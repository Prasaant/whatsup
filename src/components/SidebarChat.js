
import "./SidebarChat.css"
import React from 'react'
import PersonIcon from '@material-ui/icons/Person';
export default function SidebarChat() {
    return (
        <div className="sidebarChat">
            <PersonIcon/>
            <div className="sidebarChat__info">
                <h2>Room name
                </h2>
                <p>
                    This is last message
                </p>
            </div>
        </div>
    )
}
