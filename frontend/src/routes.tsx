import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";
import BasePage from "./pages/base-page";
import Search from "./pages/search";
import Following from "./pages/following";
import Profile from "./pages/profile";
import AuthProvider from "./contexts/Auth/AuthProvider";
import RequireAuth from "./contexts/Auth/RequireAuth";


export default function AppRoutes(){
    return(
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route index element={<Login/>}></Route>
                    <Route path="/signup" element={<Signup/>}></Route>

                    <Route path="/" element={<RequireAuth><BasePage/></RequireAuth>}>
                        <Route path="/home" element={<RequireAuth><Home/></RequireAuth>}></Route>
                        <Route path="/search" element={<Search/>}></Route>
                        <Route path="/following" element={<Following/>}></Route>
                        <Route path="/profile" element={<Profile/>}></Route>
                    </Route>
                    <Route path="*" element={<Login/>}></Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}