



import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import SearchUserCard from './SearchUserCard';
import ShowPosts from './ShowPosts';
import { HashLink as Link} from 'react-router-hash-link';
import {
  Box, 
  Drawer, 
  DrawerBody, 
  DrawerContent, 
  DrawerHeader, 
  DrawerOverlay, 
  Input, 
  Show, 
  Text, 
  Tooltip,
 
 } from "@chakra-ui/react";


import { useDisclosure } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react';

function NavbarDash() {
  const toast=useToast();
  const [myStyle,setmyStyle] = useState({
     color:'#222',
     backgroundColor: 'white',
     transition: 'all 0.3s ease',
     
  })


  const [searchValue, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchValue) {
      toast({
        title: "Please Enter something in search",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom-right",
      });
      return;
    }
  
    console.log("Search Value:", searchValue); // Add this line for debugging
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
    
      const userResponse = await axios.get("http://localhost:5000/registerUser", {
        params: { name: searchValue },
        config,
      });
    
      const adminResponse = await axios.get("http://localhost:5000/registerAdmin", {
        params: { name: searchValue },
        config,
      });
      if (userResponse.data && userResponse.data.length > 0) {
        console.log("Users Found:", userResponse.data); 
      } else {
        console.log("No users found"); 
      }
    
      if (adminResponse.data && adminResponse.data.length > 0) {
        console.log("Admins Found:", adminResponse.data);
      } else {
        console.log("No admins found");
      }
      if(adminResponse.data.length === 0 && userResponse.data.length === 0){
        toast({
          title: "No User Found",
          status: "warning",
          duration: 5000,
          isClosable: true,
          position: "bottom-right",
        });
        return;
      }
      setSearchResults([...userResponse.data, ...adminResponse.data]);
      
      
    } 
    catch (error) {
      console.log("Error:", error); 
      toast({
        title: "Error Occurred!",
        description: error.response?.data?.message || "An error occurred",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };    
   const {isOpen, onOpen, onClose} = useDisclosure();
   const [btntext, setbtntext] = useState("Enable Dark mode");

   const handleLogout=async()=>{
    try{
      const res=await axios.get("http://localhost:5000/logout")
      // console.log(res)
      navigate("/")
  
    }
    catch(err){
      console.log(err)
    }
  }

  
  const toggleStyle =  () =>{
         if(myStyle.color === '#222'){
              setmyStyle({
                 color: 'white',
                 backgroundColor : '#222',
                 transition: 'all 0.3s ease',
                
              })
               
              setbtntext("Enable Light mode")
            }
              else{
                setmyStyle({
                   color : '#222',
                   backgroundColor : 'white',
                   transition: 'all 0.3s ease'

                })
                setbtntext("Enable Dark Mode")
              }
         }
 searchResults.map((result) => {
  console.log('hi'+result.name);
});
  return (
  
    <Navbar expand="lg"   style={myStyle}>
      <Container fluid >
        <Navbar.Brand href="#" style={myStyle}>Connectify</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0  "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to ="/showAllPosts">
            <Nav.Link href="ShowPosts.js" style={myStyle}>Explore</Nav.Link>
            </Link>

            <Link to ="/getUserPosts">
            <Nav.Link href="Userposts.js" style={myStyle}>Your posts</Nav.Link>
            </Link>

            <Link to ="/notifications">
            <Nav.Link href="NotificationPage.js" style={myStyle}>Notifications</Nav.Link>
            </Link>
            
            <Link to ="/addPost">
            <Nav.Link href="CreatePost.js" style={myStyle}>Add</Nav.Link>
            </Link>
            
           
            <Nav.Link  style={myStyle} onClick={ () => navigate('/dashboard') }>Your Profile</Nav.Link>
          
          </Nav>
     
          <div>
          <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Button variant="ghost" onClick={onOpen}>
            <i className="fas fa-search"></i>
            <Text d={{ base: "none", md: "flex"}} px={4} marginRight={0}>
              Search User
            </Text>
          
          </Button>
         
        </Tooltip>
       

    </div>
        <Drawer onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          <DrawerBody>
            <Box display="flex" paddingBottom={2}>
              <Input
                placeholder="Search by name"
                marginRight={2}
                onChange={(e) => setSearch(e.target.value)}
              />
              <Button
                onClick={handleSearch}
               >Go
               </Button>
            </Box>
            <div> 
        
        {
          searchResults.map((result) => {
            return <SearchUserCard name={result.name} />;
          })
        }
        
                </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
          
          <button onClick = {toggleStyle} type="button" style = {{backgroundColor:"blue"}}class="btn btn-primary mx-4">{btntext}</button>
           
             <Button variant="outline-success" onClick={handleLogout}>Logout</Button>
              
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default NavbarDash;