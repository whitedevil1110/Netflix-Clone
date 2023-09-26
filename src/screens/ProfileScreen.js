import React from 'react'
import "./ProfileScreen.css";
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/usersSlice';
import { auth } from '../firebase';
function ProfileScreen() {
    const user = useSelector(selectUser);
  return (
    <div className=" profileScreen">
        <Nav />
        <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
                <img 
                    src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F0%2F0b%2FNetflix-avatar.png&tbnid=nZOFHtwea_quaM&vet=12ahUKEwj-uZGx9JqAAxWSzaACHTMTBigQMygAegUIARDCAQ..i&imgrefurl=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3ANetflix-avatar.png&docid=giDSZ8hKlyMOLM&w=320&h=320&q=netflix%20avatar&hl=en&ved=2ahUKEwj-uZGx9JqAAxWSzaACHTMTBigQMygAegUIARDCAQ"
                    alt=""
                />
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        <button  
                            onClick={() => auth.signOut()}
                            className="profileScreen__signOut">
                                Sign out
                        </button>
                    </div>
                </div>


            </div>
        </div>
      
    </div>
  )
}

export default ProfileScreen;
