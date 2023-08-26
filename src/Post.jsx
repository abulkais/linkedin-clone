import React, { forwardRef } from 'react'
import { Avatar } from '@material-ui/core'
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import CommentIcon from '@material-ui/icons/Comment';
import ShareIcon from '@material-ui/icons/Share';
import SendIcon from '@material-ui/icons/Send';
import './css/Post.css';
const Post = forwardRef(({name,description,message,photo}, ref) => {
    return (
            <div className='posts' ref={ref}>
                <div className="posts__header">
                    <div className="posts__headerLeft">
                        <Avatar src={photo} />
                        <div className='post_profile_deatils'>
                            <h3>{name}</h3>
                            <p>{description}</p>
                        </div>
                    </div>
                    <div className="posts__headerRight">
                        <MoreVertIcon />
                    </div>

                </div>
                <div className="posts__body">
                    <p>{message}</p>
                </div>

                <div className="posts__footer">
                    <div className='posts__footer__options'>
                        <ThumbUpIcon />
                        <span>Like</span>
                    </div>

                    <div className='posts__footer__options'>

                        <CommentIcon />
                        <span>Comment</span>

                    </div>

                    <div className='posts__footer__options'>

                        <ShareIcon />
                        <span>Sahre</span>

                    </div>

                    <div className='posts__footer__options'>

                        <SendIcon />
                        <span>Send</span>
                    </div>
                </div>
            </div>
    )
    
})

export default Post