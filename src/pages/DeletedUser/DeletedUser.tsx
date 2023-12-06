import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function DeletedUser(){
        const { id } = useParams();



    return(

        <>
            <p>Uživatel {id} byl smazán!"</p>
            <Link to={"/"}>
            <p>Vrátit se na hlavní stránku</p>
            </Link>

        
        </>

    );

}
