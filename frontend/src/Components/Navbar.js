import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { HashLink as Link} from 'react-router-hash-link';


function NavBar() {
  const [myStyle,setmyStyle] = useState({
     color:'#222',
     backgroundColor: 'white',
     transition: 'all 0.3s ease',
     
  })

   const [btntext, setbtntext] = useState("Enable Dark mode");

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
  
 
  return (
  
    <Navbar expand="lg"  sticky="top" style={myStyle}>
      <Container fluid >
        <Navbar.Brand href="#" style={myStyle}>Connectify</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0 "
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={myStyle} >Home</Nav.Link>
            <Link to ="#About">
            <Nav.Link href = "AboutUs.js" style={myStyle} >AboutUs</Nav.Link>
            </Link>
            <NavDropdown title={<span style={myStyle}>Experience</span>}  id="navbarScrollingDropdown" >
            
              <NavDropdown.Item href="#action3" style={myStyle}>Our Services</NavDropdown.Item>
              <Link to ="#ourservices">
              <NavDropdown.Item href="Utility.js" style={myStyle}>
                Preview
              </NavDropdown.Item>
              </Link>
              <NavDropdown.Divider />
              <Link to = "#login">
              <NavDropdown.Item href="Login.js" style={myStyle}>
                Login
              </NavDropdown.Item>
              </Link>
              
            </NavDropdown>
            <Link to = "#contact">
            <Nav.Link href="ContactUs.js" style={myStyle}>ContactUs</Nav.Link>
            </Link>
          </Nav>
          
          <button onClick = {toggleStyle} type="button" style = {{backgroundColor:"blue"}}class="btn btn-primary mx-4">{btntext}</button>
             <Link to = "#login">
             <Button variant="outline-success" href = "Login.js">Login</Button>
             </Link>     
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default NavBar;