import React from 'react'
import { auth } from '../firebase.config';
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const Signin = () => {
    const signin = () =>{
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log('auth', auth)
                console.log('result', result);
            })
            .catch((error) => {
                console.log('error', error);
            });
    }
    return (
        <>
            <button onClick={()=>{signin();}}>
                Sign in with google
            </button>
        </>
    )
}

export default Signin