import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserType } from "../../models/User";

export default function User(){
const { id } = useParams()
const [user, setUser] = useState<UserType>()
const [loaded, setLoaded] = useState(false);

const load = async () => {
    const user = await getUser(id);
    if (user.status === 500) return setLoaded(null);
    if (user.status === 200) {
        setUser(user.data);
        setLoaded(true);
    }
}



const getUser = async () => {
  const data = await fetch(`http://localhost:3000/users/${id}`,{
    method: "GET",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
  })
  const response = await data.json();
 setUser(response.data);
 setLoaded(true)
}
useEffect(() => {
  getUser();
}, [])
if(!loaded){
    return(

        <>
        <p>Načíta se uzivatel</p></>
    );
}
return(

    <>
    <p>Username: {user.username}</p>
    <p>Phone: {user.phone}</p>
    <p>Password: {user.password}</p>
    <Link to={"/"}>
        <p>Přejít na main page</p>
    </Link>
    </>
)


}

export type UserType = {
    username: string,
    phone: number,
    password: string,
    _id: string
}