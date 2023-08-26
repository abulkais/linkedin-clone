import React from 'react'
import { Avatar } from '@material-ui/core';
import './css/Header.css';
import { useSelector } from 'react-redux';
import { selectUser } from './features/UserSlice';
const Headeroptions = ({ Icon, title, avatar }) => {

    const user = useSelector(selectUser);

    return (

        <>


            <div className='header__options'>
                {
                    Icon && <Icon></Icon>
                }

                {
                    avatar && <Avatar name={avatar} src={user.photoURL}  />

                }
                {/* {
                    ExitToAppIcon && <ExitToAppIcon  onClick={e => firebase.auth().signOut()}/>
                } */}


                <span>{title}</span>

            </div>
        </>
    )
}

export default Headeroptions