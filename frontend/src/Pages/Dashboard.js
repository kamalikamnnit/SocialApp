// import React from "react";
// import Profile from "../Components/Profile";
// import NavbarDash from "../Components/NavbarDash";
// import SearchUserCard from "../Components/SearchUserCard";
// import img1 from "../images/one.jpg"
// function Dashboard(){
//     return (
//         <>   
        
//         <NavbarDash/>
//         <img src={img1}  alt="Blog Image" class="h-screen w-screen bg-cover"/>  
//         <Profile/>
//         </>
//     )
// }
// export default Dashboard;

import React from "react";
import Profile from "../Components/Profile";
import NavbarDash from "../Components/NavbarDash";
import SearchUserCard from "../Components/SearchUserCard";
import img1 from "../images/one.jpg";

function Dashboard() {
    return (
        <div style={{ position: 'relative', width: '100vw', height: '100vh' }}>
            <NavbarDash />
           
                <Profile />
            </div>
       
    );
}

export default Dashboard;
