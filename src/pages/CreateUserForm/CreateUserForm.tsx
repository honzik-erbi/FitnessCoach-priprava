import { redirect, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function CreateUserForm() {
  const [formData, setFormData] = useState({});
  const [info, setInfo] = useState(String);
  const navigate = useNavigate();
  const redirectToSuccessPage = () => {
    return navigate("");
  }
  const createUser = async () => {
    /*const data = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const response = await data.json();
    if(data.status == 201){
        console.log(FormData)
        //redirectToSuccessPage();
    
    }
    else {
        setInfo("Nastala chyba")*
    }*/
    console.log(formData)
  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    createUser();
  }

  return (
    <>
      <p>Create User Form</p>
      <form>
        <input required type="text" name="username" placeholder="Zadejte svoje uživatelské jméno" onChange={e => handleChange(e)}/>
        <input required type="number" name="phone" placeholder="Zadejte svůj telefon" onChange={e => handleChange(e)}/>      
        <input required type="text" name="password" placeholder="Zadejte svoje heslo" onChange={e => handleChange(e)}/>
        <button onClick={handlePost}>
            Create User
        </button>
      </form>
    </>
  );
}
