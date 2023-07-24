import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import BasePage from "./pages/base-page";
import Search from "./pages/search";
import Following from "./pages/following";
import Profile from "./pages/profile";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>

                <Route path="/" element={<BasePage/>}>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/search" element={<Search/>}></Route>
                    <Route path="/following" element={<Following/>}></Route>
                    <Route path="/profile" element={<Profile/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}