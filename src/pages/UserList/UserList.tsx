import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserType, getUsers } from "../../models/User";
import UserLink from "../../components/UserLink"

export default function UserList() {
    const [users, setUsers] = useState<UserType[]>();
    const [loaded, setLoaded] = useState(false);

    const load = async  () => {
        const users = await getUsers();
        if (users.status === 500) return setLoaded(null);
        if (users.status === 200) {
            setUsers(users.data)
            setLoaded(true);
        }
    }

    
    const getUsers = async () => {
        const data = await fetch('http://localhost:3000/users', {
            method:"GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            }
        })
        const response = await data.json();
        setUsers(response.data);
        setLoaded(true);
    };
    useEffect(() => {
        getUsers();
    },[]);

    if(!loaded){
    return (
        <>
        <p>Načítám uživatele</p>
        </>
    )
    }
    return(
        <>
        <p>Users:</p>
        {
            users.map((user) => (
                <UserLink {...user}/>
            ))
        }
        </>
    )

}