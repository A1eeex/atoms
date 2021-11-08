import React, {useEffect,useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const UserInfo = () => {
    const [user, setUser] = useState({});
    const {id} = useParams()

    const fetchUsersSimple = async (id) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
       return response.data
    }

    useEffect(()=>{
        const fetchUser =async () =>{
            const simpleUser = await fetchUsersSimple(id)
            console.log(simpleUser)
            setUser(simpleUser)
        }
        fetchUser()
    },[id])
    return (
        <div>
            <div>Id: {user.id}</div>
            <div>Name: {user.name}</div>
            <div>E-mail: {user.email}</div>

            <Link to='/'>
                <button>Back</button>
            </Link>

        </div>
    );
};

export default UserInfo;