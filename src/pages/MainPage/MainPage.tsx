import { Link } from "react-router-dom"

export function MainPage() {
    return (
        <>
            <h1>Hello world</h1>
            <Link to={"/dashboard"}>
                <p>Dashboard</p>
            </Link>

            <Link to={"/signin"}>
                <p>Sign In</p>
            </Link>

            <Link to={"/signup"}>
                <p>Sign Up</p>
            </Link>

            <Link to={"/qwpeij"}>
                <p>Bla bla</p>
            </Link> 

             <Link to={"/createuser"}>
                <p>Create User</p>
            </Link>

            <Link to={"/users"}>
                <p>Users</p>
            </Link>

            <Link to ={"/products"} >
                <p>Products</p>
            </Link>

            <Link to ={"/createproduct"} >
                <p>Create Product</p>
            </Link>




        </>
    )
}