import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function CreatedUser(){
        const { id } = useParams();



    return(

        <>
            <p>Uživatel byl vytvořen!"</p>
   
            <Link to={`/user/${id}`}>
            <p>Podívat se na uživatel: {id}</p>
            </Link>
            <Link to={"/"}>
            <p>Vrátit se na hlavní stránku</p>

            </Link>

        
        </>

    );






}