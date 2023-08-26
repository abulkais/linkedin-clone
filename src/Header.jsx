import React from 'react'
import firebase from 'firebase/compat/app';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import './css/Header.css';
import Headeroptions from './Headeroptions';
import { useSelector } from 'react-redux';
import { selectUser } from './features/UserSlice';
import logouticon from './logouticon.png'
const Header = () => {
    const user = useSelector(selectUser);
    console.log(user);
    return (
        <div className='header'>
            <div className='header__left'>
                <div className='header__logo'>
                    <img src="https://cdn-icons-png.flaticon.com/128/3536/3536505.png" alt="" />
                </div>

                <div className='header__search'>
                    <SearchIcon />
                    <input type="text" placeholder='Search' />
                </div>
            </div>

            <div className='header__right'>
                <Headeroptions Icon={HomeIcon} title="Home" />
                <Headeroptions Icon={PeopleIcon} title="My Network" />
                <Headeroptions Icon={BusinessCenterIcon} title="Jobs" />
                <Headeroptions Icon={MessageIcon} title="Messaging" />
                <Headeroptions Icon={NotificationsIcon} title="Notifications" />
                <Headeroptions avatar={Avatar} title={user.displayName} />
             
                <p style={{ display: 'flex', flexDirection: 'column', margin: '0 auto', cursor:'pointer' }} title='Log Out'>
                    <center><img src={logouticon}  title='Logout' style={{ width: '23px' }} onClick={e => firebase.auth().signOut()} /></center>
                    <span style={{ fontWeight: 'normal', fontSize: '14px' }}>Log Out</span>
                </p>

              

            </div>
        </div>
    )
}

export default Header