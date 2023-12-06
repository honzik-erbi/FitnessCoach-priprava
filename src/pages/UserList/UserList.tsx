import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { UserType, getUsers } from "../../models/User";
import UserLink from "../../components/UserLink"

export default function UserList() {
    const [users, setUsers] = useState<UserType[]>();
    const [loaded, setLoaded] = useState(false);

    const load = async () => {
        const users = await getUsers();
        if (users.status === 500) return setLoaded(null);
        if (users.status === 200) {
            console.log(users.data);
            setUsers(users.data)
            setLoaded(true);
        }
    }
 
    useEffect(() => {
        load();
    },[]);

    if(loaded == null){
        return (
            <>
            <p>Uživatelé nebyli nalezeni</p>
            <Link to={"/"}>
                <p>Zpět na hlavní stránku</p>
            </Link>
            </>
        )
    }

    if(!loaded){
    return (
        <>
        <p>Načítám uživatele</p>
        <Link to={"/"}>
                <p>Zpět na hlavní stránku</p>
            </Link>
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