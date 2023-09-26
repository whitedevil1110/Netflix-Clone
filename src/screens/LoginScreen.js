import React, { useState } from 'react';
import './LoginScreen.css';
import SignupScreen from './SignupScreen';

function LoginScreen() {
    const [signIn, setSignIN] = useState(false);
    return (
        <div className='LoginScreen'>
            <div className="loginScreen__background">
                <img 
                   className="loginScreen__logo"
                   src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.cookielaw.org%2Flogos%2Fdd6b162f-1a32-456a-9cfe-897231c7763c%2F4345ea78-053c-46d2-b11e-09adaef973dc%2FNetflix_Logo_PMS.png&tbnid=D1jPirbXXWcqYM&vet=12ahUKEwiGy-y76LWAAxVammMGHYEgBygQMygBegUIARDhAQ..i&imgrefurl=https%3A%2F%2Fhelp.netflix.com%2Fen%2Fnode%2F100627&docid=DM_lOolXRQckpM&w=1801&h=756&itg=1&q=netflix%20log&ved=2ahUKEwiGy-y76LWAAxVammMGHYEgBygQMygBegUIARDhAQ"
                   alt=""
                />
                <button onClick={() => setSignIN(true)} 
                className="loginScreen__button"> 
                  Sign In
                </button>

                <div className="loginScreen__gradient" /> 
                </div>

                <div className="loginScreen__body">
                     {signIn ? (
                         <SignupScreen />
                     ) : (
                     <>
                      <h1>Unlimited films, TV programmes and more.</h1>
                      <h2> Watch anywhere . cancel at any time.</h2>
                      <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                       <div className="loginScreen__input" >
                         <form>
                             <input type='email' placeholer="Email Address" />
                                <button onClick={() => setSignIN(true)}
                                   className='loginScreen__getStarted'> 
                                    GET STARTED
                                </button>
                          </form>
                        </div>
                      </>
                )}
            </div>
        </div>
    );
}

export default LoginScreen;
