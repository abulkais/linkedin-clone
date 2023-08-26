import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { auth } from './firebase';
import { loginuser } from './features/UserSlice';
import './css/Login.css';
const Login = () => {
    // for required
    const [namerequired, setNameRequired] = useState('');
    const [photourlrequired, setPhotoURLRequired] = useState('');
    const [Emailrequired, setEmailRequired] = useState('');
    const [passwordrequired, setPasswordRequired] = useState('');

    const [signup, setSignup] = useState(false);
    const [name, setName] = useState("");
    const [photoURL, setPhotoURL] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch()
    const register = (e) => {
        e.preventDefault();
        if (!name) {
            // return alert('Name is Required');
            return setNameRequired('Name is Required')
        }

        if (!photoURL) {
            // return alert('PhotoURL is Required');
            return setPhotoURLRequired('Short Profile Image URL is Required')
        }
        if (!email) {
            // return alert('Email is Required');
            return setEmailRequired('Email is Required')
        }
        if (!password) {
            // return alert('Password is Required');
            return setPasswordRequired('Password is Required atleast 6 digit')
        }
        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: photoURL
            }).then(() => {
                dispatch(loginuser({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    photoURL: photoURL,
                    displayName: name
                }))
            })
        }).catch(error => alert(error));
        setName("");
        setPhotoURL("");
        setEmail("");
        setPassword("");
    }
    const signIn = (e) => {
        e.preventDefault();
        if (!email) {
            // return alert("Email is required");
            return setEmailRequired('Email is Required')
        } else if (!password) {
            // return alert("Password is required");
            return setPasswordRequired('Password is Required')
        }
        auth.signInWithEmailAndPassword(email, password).then(({ user }) => {
            dispatch(loginuser({
                email: user.email,
                uid: user.uid,
                photoURL: user.photoURL,
                displayName: user.displayName
            }))
        }).catch(error=>alert(error));

    }
    return (
        <>

            <div className='loginscreen'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/19/LinkedIn_logo.svg" alt="linkedin logo" />
                {
                    signup === true ? (<form onSubmit={register}>
                        <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)} />
                        <p>{namerequired}</p>
                        <input type="url" placeholder='Profile picture URL' value={photoURL} onChange={e => setPhotoURL(e.target.value)} />
                        <p>{photourlrequired}</p>
                        <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                        <p>{Emailrequired}</p>
                        <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                        <p>{passwordrequired}</p>
                        <input type="submit" value="Sign Up" />
                        <h4>Already a member ? <span onClick={e => setSignup(false)}>Login here</span></h4>
                    </form>) : (<form onSubmit={signIn}>
                        <input type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                        <p>{Emailrequired}</p>
                        <input type="password" placeholder='Password' value={password} onChange={e => setPassword(e.target.value)} />
                        <p>{passwordrequired}</p>
                        <input type="submit" value="Sign In" />
                        <h4>Not a member ? <span onClick={e => setSignup(true)}>Register here</span></h4>
                    </form>)
                }



            </div>
        </>
    )
}

export default Login