import { useParams } from "react-router-dom";
import { useState } from "react";

export default function User(){
const { id } = useParams()
const [user, setUser] = useState<UserType>()
const getUser = async () => {
  const data = await fetch(`http://localhost:3000/users/${id}`,{
    method: "GET",
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }
  })

}
return(

    <>
    
    
    </>
)


}

export type UserType = {
    username: string,
    phone: number,
    password: string,
    _id : string
}