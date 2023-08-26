import React from 'react'
import './css/Sidebar.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { selectUser } from './features/UserSlice';
const Sidebar = () => {
    const user = useSelector(selectUser);
    return (
        <div className='sidebar'>
            <div className="sidebar__profile">
                <img src="https://media.licdn.com/dms/image/D4D16AQEs1z2SvM0CRQ/profile-displaybackgroundimage-shrink_200_800/0/1691657259872?e=1697068800&v=beta&t=c57kcgB9jjc7JsGxxEKQKVWldUCCTknrKhH3obFn8QI" alt="" />
                <div className='profile__details'>
                    <Avatar src={user.photoURL} alt="profile photo" />
                    <h4>{user.displayName}</h4>
                    <p>Web Developer at Sisgain</p>
                </div>
                <hr />


                <div className="profile__status">
                    <span >Connection <br /> <strong>Grow Your Network</strong></span>
                    <span className='status__number'>100</span>
                </div>

                <div className="profile__status">
                    <span >Who viwed your profile</span>
                    <span className='status__number'>20</span>
                </div>
                <hr />
                <div className='profile_premium'>
                    <span>Access exclusive tools & insights <br /> <a href="" target='_blank'>Try Premium for free</a></span>
                </div>
                <hr />
                <div className='profile_myitems'>
                    <span>My items</span>
                </div>
            </div>
            <div className='sidebar__recent'>
                <p>Recent</p>
                <p className='hash'> <span>#</span> HTML</p>
                <p className='hash'> <span>#</span> CSS</p>
                <p className='hash'> <span>#</span> Javascript</p>
                <p className='hash'> <span>#</span> Bootstrap</p>
                <p className='hash'> <span>#</span> ReactJs</p>
                <p className='hash'> <span>#</span> Tailwind</p>
                <p className='hash'> <span>#</span> Java</p>
                <hr />
                <h4 style={{    padding: '5px 10px'}}>Clone by ~ <b style={{color:'#0077b5'}}>Abul kaish</b></h4>
            </div>
           

        </div>
    )
}

export default Sidebar