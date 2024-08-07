import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import { DealProvider } from "./components/Contexts/DealContext";
import Navbar from "./components/Navbar/Navbar";
import OfferRibbon from "./components/Ribbon/OfferRibbon";
import Home from "./components/home/Home";
import { ProductProvider } from "./components/Contexts/ProductContext";
import { BlogProvider } from "./components/Contexts/BlogContext";
import Store from "./components/Store/Store";
import AllProduct from "./components/Store/AllProduct";
import GlobalProvider from "./components/Contexts/GlobalVariable";
import ProductDescription from "./components/Store/ProductDescription";
import VideoSection from "./components/Videos/VideoSection";
import Video from "./components/Videos/Video";
import Register from "./components/registerAndLogin/Register";
import Login from "./components/registerAndLogin/Login";
import MainBlogs from "./components/home/HomePages/blogs/MainBlogs";

const App=()=>{
  return(
    <ProductProvider>
    <BlogProvider>
    <DealProvider>  
    <GlobalProvider>
    <BrowserRouter>
   
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/store" element={<Store/>} />
      <Route path="/store/category" element={<AllProduct/>} />
      <Route path="/store/category/product/:productId" element={<ProductDescription/>}/>
      <Route path="/videoSection" element={<VideoSection/>}/>
      <Route path="/video-Section" element={<Video/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/Blogs" element={<MainBlogs/>}/>
    </Routes>
    </BrowserRouter>
    </GlobalProvider>
    </DealProvider>
    </BlogProvider>
    </ProductProvider>
  )
}

export default App;
