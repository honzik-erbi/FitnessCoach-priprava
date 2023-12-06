import React from "react";
import { UserType } from "../models/User";
import { Link } from "react-router-dom";

export default function UserLink(props: UserType) {
    return(
        <>
        <p>User: </p>
        <p>Username: {props.username}</p>
        <Link to={`/user/${props._id}`}>
            <p>Podívat se na uživatele</p>
        </Link>
        </>
    )
}