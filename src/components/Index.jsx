import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import Logout from './Logout'
import Signin from './Signin'
import LamaSignin from './LamaSignin'

const Index = () => {
    const {currentUser} = useContext(AuthContext)
    console.log('Index.jsx',currentUser)
    return (
        <>
        {
            currentUser === null ? 
            // <Signin />
            <LamaSignin />
            :
            <Logout />
        }
        {/* <LamaSignin /> */}
        </>
    )
}

export default Index;