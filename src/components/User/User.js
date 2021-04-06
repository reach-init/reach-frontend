import React from 'react';
import UserService from '../../services/UserService';

import {
    useParams
  } from "react-router-dom";

  import {useState} from 'react'
import Post from '../Post/Post';
  

export default function User() {
    const [user, setUser] = useState();

    let { id } = useParams();
    
    React.useEffect(async () => {
        try {
            const user = await UserService.getUserById(id)
            console.log(user)
            setUser(user.data)
        } 
        catch(e) {
            console.log(e);
        }
    },[])
    return (
        user ? <Post user={user} /> : <h1>Loading...</h1>
    );
}