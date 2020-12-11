import { Avatar, Button } from '@material-ui/core';
import React from 'react';
import './VideoFooter.css';
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import SendIcon from '@material-ui/icons/Send';
import Ticker from "react-ticker"
import { ModeComment } from '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import MoreVertIcon from '@material-ui/icons/MoreVert';
function VideoFooter(props) {
    return (
        <div className='videoFooter'>
            <div className="videoFooter__text">
                <Avatar src={props.avatarSrc} />
                <h3>
                {props.channel}<Button>Follow</Button>
                </h3>
            </div>
            <div className="videoFooter__ticker">
                <MusicNoteIcon className="videoFooter__MusicNote" />
                <Ticker mode="smooth">
                    {({index}) =>(
                        <>  
                        <h1>{props.song}</h1>
                        </>
                    )}
                </Ticker>
            </div>
            <div className="videoFooter__actions">
            <div className="videoFooter__actionsLeft">
                <FavoriteIcon fontSize='large' className="videoFooter__actionsLeftFavoriteIcon"/>
                <ChatBubbleIcon fontSize='large' className="videoFooter__actionsLeftChatBubbleIcon"/>
                <SendIcon fontSize='large' className="videoFooter__actionsLeftSendIcon"/>
                <MoreVertIcon fontSize='large'className="videoFooter__actionsLeftMoreVertIcon"/>
            </div>
            <div className="videoFooter__actionsRight">
                <FavoriteIcon className="videoFooter__actionsRightFavoriteIcon" />
                <p>{props.likes}</p>
                <ModeComment className="videoFooter__actionsRightModeComment" />
                <p>{props.shares}</p>                
            </div>
            </div>

        </div>
    )
}

export default VideoFooter
