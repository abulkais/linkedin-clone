import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widget from './Widget';
import Login from './Login';
import { useDispatch, useSelector } from 'react-redux';
import { loginuser, logout, selectUser } from './features/UserSlice';
import { auth } from './firebase';
function App() {
  const user = useSelector(selectUser);
  // console.log(user);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //already login
        dispatch(loginuser({
          email:userAuth.email,
          uid:userAuth.uid,
          photoURL:userAuth.photoURL,
          displayName:userAuth.displayName
        }))
      } else {
        // logout
        dispatch(logout())
      }
    })
  }, [])
  return (
    <>
      {
        !user ? (<Login />) : (

          <div className='app_wrapper'>
            <Header />
            <div className="app_body">
              <Sidebar />
              <Feed />
              <Widget />
            </div>
          </div>
        )
      }
    </>
  );
}

export default App;
