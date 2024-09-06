import React from 'react'
import { useContext } from "react"
import UserContext from '../Context/userContext'

function Profile() {

    const {user} = useContext(UserContext)
    if(!user) return <div>Please Login</div>
    
    return <div>Welcome {user.username} </div>
}

export default Profile
