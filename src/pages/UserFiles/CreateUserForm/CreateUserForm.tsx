import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createUser, UserType } from "../../../models/User";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function CreateUserForm() {
  const [formData, setFormData] = useState<UserType>();
  const [info, setInfo] = useState(String);
  const navigate = useNavigate();

  const redirectToSuccessPage = (id: string) => {
    return navigate(`/createduser/${id}`);
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const handlePost = (e: React.FormEvent) => {
    e.preventDefault();
    sendForm();
  }

  const sendForm = async () => {
    const user = await createUser(formData);
    if (user.status === 201) return redirectToSuccessPage(user.data._id);
    setInfo(user.msg);
    
  }
  useEffect(() => {
    console.log(formData);
  },[formData])

  return (
    <>
      <p>Create User Form</p>
      <form>
      <input required type="text" name="username" placeholder="Zadejte svoje uživatelské jméno" onChange={e => handleChange(e)}/>
      <input required type="radio" value="Male" name="gender" onChange={e => handleChange(e)}/>
      <input required type="radio" value="Female" name="gender" onChange={e => handleChange(e)}/>
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


