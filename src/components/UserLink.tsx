import React from "react";
import { UserType } from "../pages/User/User";
import { Link } from "react-router-dom";

export default function UserLink(props: UserType) {
    return(
        <>
        <p>User: </p>
        <p>Username: {props.username}</p>
        <Link to={`/users/${props._id}`}>
            <p>Podívat se na uživatele</p>
        </Link>
        </>
    )
}