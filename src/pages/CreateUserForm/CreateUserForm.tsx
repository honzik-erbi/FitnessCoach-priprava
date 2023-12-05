import { redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUser, UserType } from "../../models/User";

export default function CreateUserForm() {
  const [formData, setFormData] = useState<UserType>();
  const [info, setInfo] = useState(String);
  const navigate = useNavigate();
  const redirectToSuccessPage = (id: string) => {
    return navigate(`/createduser/${id}`);
  }
  
  const sendForm = async () => {
    const user = await createUser(formData);
    if (user.status === 201) return redirectToSuccessPage(user.data._id);
    setInfo(user.msg);
    }
  }


  const createUser = async () => {
    const data = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const response = await data.json();
    if(data.status == 201){
        redirectToSuccessPage(response.createdUser.result._id);
        setInfo(response.msg)
    }
    else {
        setInfo("Nastala chyba")
    }
    console.log(formData)
  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    sendForm();
  }

  return (
    <>
      <p>Create User Form</p>
      <form>
        <input required type="text" name="username" placeholder="Zadejte svoje uživatelské jméno" onChange={e => handleChange(e)}/>
        <input required type="number" name="phone" placeholder="Zadejte svůj telefon" onChange={e => handleChange(e)}/>      
        <input required type="password" name="password" placeholder="Zadejte svoje heslo" onChange={e => handleChange(e)}/>
        <button onClick={handlePost}>
            Create User
        </button>
        <p>{info}</p>
      </form>
    </>
  );
}
