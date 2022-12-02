import React from 'react'
import {auth} from '../firebase.config'
import { signOut } from 'firebase/auth'
const Logout = () => {
    return (
        <>
            <button
            onClick={()=>{signOut(auth)}}
            >Logout</button>
        </>
    )
}

export default Logout