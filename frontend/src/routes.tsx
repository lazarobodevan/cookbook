import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Home from "./pages/home";

export default function AppRoutes(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Login/>}></Route>
                    <Route path="/signup" element={<Signup/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}