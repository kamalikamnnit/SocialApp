import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { useToast } from '@chakra-ui/toast';
import { FilePond,registerPlugin} from "react-filepond";
import { FaFacebook,FaGithub,FaInstagram,FaGoogle,FaTwitter ,FaLinkedin} from "react-icons/fa";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBIcon
}
from 'mdb-react-ui-kit';
import {BrowserRouter,useNavigate} from "react-router-dom";

import '../App.css';
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import { Box, Container, Heading, Text, Flex, FormControl, FormLabel, Input, Textarea, Button } from "@chakra-ui/react";
import '../App.css';


registerPlugin(
	FilePondPluginImagePreview,
	FilePondPluginFileEncode,
	FilePondPluginImageResize,
	FilePondPluginImageTransform,
	FilePondPluginFileValidateType
);


function SignUpUser(props) {
  const [email, setEmail] = useState('');
  const [name,setName]=useState('');
  const [phone,setPhone]=useState('');
  const [password,setPassword]=useState('');
  const [files,setFiles] = useState('');
  const [confirmPassword,setConfirmPassword]=useState('');
  const navigate=useNavigate();
  const toast=useToast();
  const handleSignUpUserClick=async (e)=>{
    e.preventDefault();
    if(email==='' || name==='' || phone==='' || password==='' || confirmPassword===''){
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
   
      return;
    }
    if(password!==confirmPassword){
     toast({
        title: "Passwords do not match",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
     }
     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
    if (!passwordRegex.test(password)) {
     
      toast({
        title: "Password Validation Error",
        description:
          "Password should contain at least one digit, one lowercase, and one uppercase letter. It must be at least 8 characters long.",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:5000/registerUser",
        {
          name,
          email,
          password,
          phone,
          
          
        },
        config
      );
  
      if (response.data) {
        // Check if the 'data' property is available in the response
        const data = response.data;
        toast({
          title: "Registration Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        navigate('/login')
      } else {
        
        toast({
          title: "Error Occured: No Data in Response",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
  
    } catch (error) {
      console.log(error);
      toast({
        title: "Error Occured!",
        description: error.response?.data?.message || "An error occurred",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  }

    const backgroundStyle = {
        background:'linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))',
    }

    return (
      <Box bgGradient="linear(to-r, blue.600, blue.400)" py={10}>
      <MDBContainer fluid  id="signup">
      <MDBRow className="d-flex justify-content-center">

<MDBCol md='6'>

  <MDBCard className='my-5'>
    <MDBCardBody className='p-5'>
    <FilePond
        class="mb-4"
        labelIdle="Drag & Drop your picture"
        files={files}
        allowMultiple={false}
        onupdatefiles={setFiles}
        imageResizeTargetWidth={50}
        imageResizeTargetHeight={50}
        acceptedFileTypes={["image/jpeg", "image/png", "images/gif"]}
        required={true}
    />
<br></br>
    <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' onChange={(e) => setName(e.target.value)}/>
                </MDBCol>

                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Phone' id='form1' type='number' onChange={(e) => setPhone(e.target.value)}/>
                </MDBCol>
              </MDBRow>
              <br>
</br>
<br></br>
<br>
</br>
<br></br>
<br></br>
<br></br>
              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' onChange={(e) => setEmail(e.target.value)}/>
             
              <MDBRow>
              <MDBCol col='6'>

              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' onChange={(e) => setPassword(e.target.value)}/>
              </MDBCol>

<MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form1' type='password'  onChange={(e) => setConfirmPassword(e.target.value)}  />
              </MDBCol>
              </MDBRow>
        
              <div class="d-flex gap-2 col-3 mx-auto justify-content-centre">
               
     <button class="btn btn-primary" type="button" style={{background: "#222"}} onClick={handleSignUpUserClick}>SignUp As User</button>
    
               </div>
                <br></br>
              <div className="text-center"   style={{display: "flex", alignItems: 'center', justifyContent: 'center'  }}>
              <br></br>
                <p style={{ marginBottom:"4px" }}>or signup with </p>
                    <br></br>
                    
                <MDBBtn tag='a' color='none' className='mx-3 my-2 ' style={{ color: '#1266f1' }}>
                  <FaFacebook/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
                  <FaTwitter/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
                    <FaGoogle/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
                  <FaGithub/>
                </MDBBtn>
                 
              </div>
              <br></br>
              <p style={{textAlign: "center"}}>Already have an account: </p>
              <div class="d-grid gap-2 col-6 mx-auto">
              <button class="btn btn-primary" type="button" style={{background: "#222"}} onClick={ () => navigate('/login') }>Login</button>
              <button class="btn btn-primary" type="button" style={{background: "#222"}} onClick={ () => navigate('/') }>Back</button>
               </div>
             
            </MDBCardBody>
         </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
    </Box>
  );
}

export default SignUpUser;