import React from "react";
import Navbar from "../Components/Navbar";
import CarouselCustom from "../Components/Carousel";
import LoginPage from "../Components/LoginPage";
import SignUp from "../Components/Signup";
import Utility from "../Components/Utility";
import ContactUs from "../Components/ContactUs";
import AboutUs from "../Components/AboutUs";
import Footer from "../Components/Footer";
import Opener from "../Components/Opener";
import { useState } from "react";
function HomePage() {
    const [loginForm, setLoginForm] = useState(true)

    return (
        <>
           <Navbar/>
           <CarouselCustom/>
           <Utility/>
           
                         <LoginPage/>
                        
                
         
           <ContactUs/>
          <Opener/>
           <Footer/>
        </>
    )
}
export default HomePage;