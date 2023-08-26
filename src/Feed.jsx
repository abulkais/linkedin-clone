import React, { useEffect, useState } from 'react'
import { Avatar } from '@material-ui/core';
import InsertPhotoIcon from '@material-ui/icons/InsertPhoto';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import './css/Feed.css';
import Post from './Post';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/database";

import { db } from './firebase';
import { useSelector } from 'react-redux';
import { selectUser } from './features/UserSlice';
import FlipMove from 'react-flip-move';
const Feed = () => {
    const user = useSelector(selectUser);
    const [posts, setPost] = useState([]);
    const [input, setInput] = useState();

    const submitPost = (e) => {
        e.preventDefault();
        db.collection("posts").add({
            name: user.displayName,
            description: "400 followers",
            message: input,
            photo: user.photoURL,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput("");
    }

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot(snapshot => {
            setPost(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })))
        })
    }, [])
    // console.log(posts);

    return (
        <div className='feed'>
            <div className='feed__input'>
                <div className="feed__form">
                    <Avatar src={user.photoURL} alt="profile photo" />
                    <form onSubmit={submitPost}>
                        <input type="text" placeholder='Start a post' value={input} onChange={e => setInput(e.target.value)} />
                        <input type="submit" />
                    </form>
                </div>

                <div className='feed__options'>
                    <div className='option'>
                        <InsertPhotoIcon style={{ color: '#378fe9' }} />
                        <span>Photo</span>
                    </div>

                    <div className='option'>
                        <VideoCallIcon style={{ color: '#5f9b41' }} />
                        <span>Video</span>
                    </div>

                    <div className='option'>
                        <EventIcon style={{ color: '#c37d16' }} />
                        <span>Event</span>
                    </div>

                    <div className='option'>
                        <AssignmentIcon style={{ color: '#e16745' }} />
                        <span>Write Artical</span>
                    </div>
                </div>
            </div>
            <FlipMove>
                {
                    posts.map(({ id, data: { name, description, message, photo } }) => {
                        return (
                            <>
                                <Post key={id} name={name} description={description} message={message} photo={photo} />

                            </>
                        )
                    })
                }
            </FlipMove>



        </div>
    )
}

export default Feed