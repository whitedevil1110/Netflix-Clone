import React, { useRef } from 'react'
import { auth } from '../firebase';
import "./SignupScreen.css";

function SignupScreen() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const register = (e) => {
        e.preventDefault();

        auth
           .createUserWithEmailAndPassword(
             emailRef.current.value,
             passwordRef.current.value
            )
            .then((authUser) => {
                console.log(authUser);
            })
            .catch((error) => {
                alert(error.message);
            });
    };

    const signIn = (e) => {
        e.preventDefault();

        auth
           .signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value

            )
            .then((authUser) => {
                console.log(authUser); 
            })
            .catch((error) => {
                alert(error.message)
            });

    };


  return (
    <div className=" signupScreen">
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} placeholder=" Email" type= "email" />
            <input ref={passwordRef} placeholder="Password" type= "password"/>
            <button type="submit" onClick={signIn}>SignIn</button>
            <h2>
                <span className="signupScreen__gray">New to Netflix?  </span>
                <span className="signupScreen__link" onClick={register}>Sign UP now.</span>
            </h2>
        </form>
      
    </div>
  );
}

export default SignupScreen ;
