import {useEffect} from 'react';
import "../styles/profile.css"
import { useNavigate } from 'react-router-dom';

function Profile (props) {
    const history = useNavigate();

    useEffect(() => {
        const check = () => {
            if(isLoggedIn === false || !isLoggedIn){
                history("/login")
            }
        }
        check()
      }, []);

    const user = JSON.parse(sessionStorage.getItem("userData"));
    const isLoggedIn = JSON.parse(sessionStorage.getItem("isLoggedIn"));
    const profileObj = user && user ? user.profileObj : {};

        return (
            <>
            <div>
              <p>User Profile</p>
                {profileObj && profileObj ?
                <div>
                    <div className='profile-img'>
                        <img src={profileObj.imageUrl} alt="user"/>
                    </div>
                    <div>
                        <h3>Email</h3>
                        <p className='text-capitalize'>{profileObj.email}</p>
                    </div>
                    <div>
                        <h3>First</h3>
                        <p className='text-capitalize'>{profileObj.givenName}</p>
                    </div>
                    <div>
                        <h3>Surname</h3>
                        <p className='text-capitalize'>{profileObj.familyName}</p>
                    </div>
                </div>
                : " " }
            </div>
            </>
          );
        
    }

export default Profile;