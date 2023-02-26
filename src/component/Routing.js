import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Post from "./Post";
import Profile from "./Profile";
import PostDetails from './postDetails';
import Main from "./Main"
const Routing = ()=>{
    return(
        <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Main/>}>
                    <Route index element={<Home/>}></Route>
                    <Route exact path="/" element={<Home/>}></Route>
                    <Route exact path="/post" element={<Post/>}></Route>
                    <Route path="/profile" element={<Profile/>}></Route>
                    <Route path="/post/:topic" element={<PostDetails/>}></Route>
                </Route>
            </Routes>
            <Footer year="2020"></Footer>
        </BrowserRouter>
    )
}
export default Routing;