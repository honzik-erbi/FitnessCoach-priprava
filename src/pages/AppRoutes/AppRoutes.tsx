import { HashRouter, Routes, Route } from "react-router-dom";
import { MainPage } from "../MainPage/MainPage";
import Dashboard from "../Dashboard/Dashboard";
import SignIn from "../SignIn/SignIn";
import SignUp from "../SignUp/SignUp";
import NotFound from "../NotFound/NotFound";
import CreateUserForm from "../CreateUserForm/CreateUserForm";
import CreatedUser from "../CreatedUser/CreatedUser";
import User from "../User/User";
import UserList from "../UserList/UserList";

export function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/dashboard" element={<Dashboard />}/>
                <Route path="/signin" element={<SignIn />}/>
                <Route path="/signup" element={<SignUp />}/>  
                <Route path="/createuser" element={<CreateUserForm />}/>
                <Route path="/createduser/:id" element={<CreatedUser />}/>    
                <Route path="/user/:id" element={<User />}/>
                <Route path="/users" element={<UserList/>}/>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </HashRouter>
    )
}