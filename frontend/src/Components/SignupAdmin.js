
// // import React from 'react';
// // import { useState } from 'react';
// // import axios from "axios";
// // import { BrowserRouter} from 'react-router-dom';
// // import { useNavigate } from 'react-router-dom';

// // import { FilePond,registerPlugin} from "react-filepond";
// // import { FaFacebook,FaGithub,FaInstagram,FaGoogle,FaTwitter ,FaLinkedin} from "react-icons/fa";
// // import {
// //   MDBBtn,
// //   MDBContainer,
// //   MDBRow,
// //   MDBCol,
// //   MDBCard,
// //   MDBCardBody,
// //   MDBInput,
// //   MDBCheckbox,
// //   MDBIcon
// // }

// // from 'mdb-react-ui-kit';
// // import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// // import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
// // import FilePondPluginFileEncode from "filepond-plugin-file-encode";
// // import FilePondPluginImageResize from "filepond-plugin-image-resize";
// // import FilePondPluginImageTransform from "filepond-plugin-image-transform";
// // import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

// // import '../App.css';
// // import { useToast } from "@chakra-ui/react";

// // registerPlugin(
// // 	FilePondPluginImagePreview,
// // 	FilePondPluginFileEncode,
// // 	FilePondPluginImageResize,
// // 	FilePondPluginImageTransform,
// // 	FilePondPluginFileValidateType
// // );

// // function SignUpAdmin(props) {
// // const toast=useToast();
// //   const [email, setEmail] = useState('');
// //   const [name,setName]=useState('');
// //   const [phone,setPhone]=useState('');
// //   const [password,setPassword]=useState('');
// //   const [company,setCompany]=useState('');
// //   const [position,setPosition]=useState('');
// //   const [files,setFiles]=useState('')
// //   const [confirmPassword,setConfirmPassword]=useState('');
// //  const navigate=useNavigate();
// //   const handleSignUpAdminClick=async (e)=>{
// //     e.preventDefault();
// //     const photoEncode = files[0].getFileEncodeBase64String();
// //     if(email==='' || name==='' || phone==='' || password==='' || company==='' || position==='' || confirmPassword==='' || !photoEncode===''){

// //       toast({
// //         title: "Please Fill all the Fields",
// //         status: "warning",
// //         duration: 5000,
// //         isClosable: true,
// //         position: "bottom",
// //       });
   
// //       return;
// //     }
// //     if(password!==confirmPassword){
// //      toast({
// //         title: "Passwords do not match",
// //         status: "warning",
// //         duration: 5000,
// //         isClosable: true,
// //         position: "bottom",
// //       });
// //       return;
// //      }
// //      const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
// //     if (!passwordRegex.test(password)) {
// //       console.log("dd");
// //       toast({
// //         title: "Password Validation Error",
// //         description:
// //           "Password should contain at least one digit, one lowercase, and one uppercase letter. It must be at least 8 characters long.",
// //         status: "warning",
// //         duration: 5000,
// //         isClosable: true,
// //         position: "bottom",
// //       });
// //       return;
// //     }
    
// //     try {
// //       const config = {
// //         headers: {
// //           "Content-type": "application/json",
// //         },
// //       };
// //       const response = await axios.post(
// //         "http://localhost:5000/registerAdmin",
// //         {
// //           name,
// //           email,
// //           password,
// //           phone,
// //           company,
// //           position,
// //           photoEncode
// //         },
// //         config
// //       );
  
// //       if (response.data) {
// //         // Check if the 'data' property is available in the response
// //         const data = response.data;
// //         toast({
// //           title: "Registration Successful",
// //           status: "success",
// //           duration: 5000,
// //           isClosable: true,
// //           position: "bottom",
// //         });
// //       navigate('/')
// //       } else {
// //         // Handle the case where the response does not contain 'data'
// //         toast({
// //           title: "Error Occured: No Data in Response",
// //           status: "error",
// //           duration: 5000,
// //           isClosable: true,
// //           position: "bottom",
// //         });
// //       }
  
// //     } catch (error) {
// //       console.log(error);
// //       toast({
// //         title: "Error Occured!",
// //         description: error.response?.data?.message || "An error occurred",
// //         status: "error",
// //         duration: 5000,
// //         isClosable: true,
// //         position: "bottom",
// //       });
// //     }
// //   }

 
// //     const backgroundStyle = {
// //         background:'linear-gradient(to right, rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))',
// //     }

  
// //   return (
  
// //     <MDBContainer fluid  className='p-4 background-radial-gradient overflow-hidden' id = "signup">

// //       <MDBRow>

// //         <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

// //           <h1 className="my-5 display-3 fw-bold ls-tight px-3">
// //             The best offer <br />
// //             <span className="text-primary">for your business</span>
// //           </h1>

// //           <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
// //             Lorem ipsum dolor sit amet consectetur adipisicing elit.
// //             Eveniet, itaque accusantium odio, soluta, corrupti aliquam
// //             quibusdam tempora at cupiditate quis eum maiores libero
// //             veritatis? Dicta facilis sint aliquid ipsum atque?
// //           </p>

// //         </MDBCol>

// //         <MDBCol md='6'>

// //           <MDBCard className='my-5'>
// //             <MDBCardBody className='p-5'>
// //             <FilePond
// //         class="mb-4"
// //         labelIdle="Drag & Drop your picture"
// //         files={files}
// //         allowMultiple={false}
// //         onupdatefiles={setFiles}
// //         imageResizeTargetWidth={50}
// //         imageResizeTargetHeight={50}
// //         acceptedFileTypes={["image/jpeg", "image/png", "images/gif"]}
// //         required={true}
// //     />
// // <br></br>
// //               <MDBRow>
// //                 <MDBCol col='6'>
// //                   <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' onChange={(e) => setName(e.target.value)}/>
// //                 </MDBCol>

// //                 <MDBCol col='6'>
// //                   <MDBInput wrapperClass='mb-4' label='Phone' id='form1' type='number' onChange={(e) => setPhone(e.target.value)}/>
// //                 </MDBCol>
// //               </MDBRow>
// // <br>
// // </br>
// // <br></br>
// // <br>
// // </br>
// // <br></br>

// // <br></br>
// // <br></br>
// //               <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' onChange={(e) => setEmail(e.target.value)}/>
// //               <MDBInput wrapperClass='mb-4' label='Company' id='form1' type='text' onChange={(e) => setCompany(e.target.value)}/>
// //               <MDBInput wrapperClass='mb-4' label='Position' id='form1' type='text' onChange={(e) => setPosition(e.target.value)}/>
// //               <MDBRow>
// //               <MDBCol col='6'>

// //               <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' onChange={(e) => setPassword(e.target.value)}/>
// //               </MDBCol>

// // <MDBCol col='6'>
// //               <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form1' type='password'  onChange={(e) => setConfirmPassword(e.target.value)}  />
// //               </MDBCol>
// //               </MDBRow>
        
        
// //               <div class="d-flex gap-2 col-3 mx-auto justify-content-centre">
// //      <button class="btn btn-primary" type="button" style={{background: "#222"}} onClick={handleSignUpAdminClick} >SignUp As Admin</button> 
// //     </div>
// //                 <br></br>
// //               <div className="text-center"   style={{display: "flex", alignItems: 'center', justifyContent: 'center'  }}>
// //               <br></br>
// //                 <p style={{ marginBottom:"4px" }}>or </p>
// //                     <br></br>
                    
// //                 <MDBBtn tag='a' color='none' className='mx-3 my-2 ' style={{ color: '#1266f1' }}>
// //                   <FaFacebook/>
// //                 </MDBBtn>

// //                 <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
// //                   <FaTwitter/>
// //                 </MDBBtn>

// //                 <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
// //                     <FaGoogle/>
// //                 </MDBBtn>

// //                 <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
// //                   <FaGithub/>
// //                 </MDBBtn>

// //               </div>
// //               <br></br>
// //               <p style={{textAlign: "center"}}>Already have an account: </p>
// //               <div class="d-grid gap-2 col-6 mx-auto">
// //               <button class="btn btn-primary" type="button" style={{background: "#222"}} onClick={ () => navigate('/login') }>Login</button>
// //                </div>
             
// //             </MDBCardBody>
// //          </MDBCard>

// //         </MDBCol>

// //       </MDBRow>

// //     </MDBContainer>
    
// //   );
// // }

// // export default SignUpAdmin;

// import React, { useState } from 'react';
// import axios from "axios";
// import { useNavigate } from 'react-router-dom';
// import { FilePond, registerPlugin } from "react-filepond";
// import { FaFacebook, FaGithub, FaInstagram, FaGoogle, FaTwitter, FaLinkedin } from "react-icons/fa";
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
// } from 'mdb-react-ui-kit';
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
// import FilePondPluginFileEncode from "filepond-plugin-file-encode";
// import FilePondPluginImageResize from "filepond-plugin-image-resize";
// import FilePondPluginImageTransform from "filepond-plugin-image-transform";
// import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
// import { useToast } from "@chakra-ui/react";
// import '../App.css';

// registerPlugin(
//   FilePondPluginImagePreview,
//   FilePondPluginFileEncode,
//   FilePondPluginImageResize,
//   FilePondPluginImageTransform,
//   FilePondPluginFileValidateType
// );

// function SignUpAdmin() {
//   const toast = useToast();
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [password, setPassword] = useState('');
//   const [company, setCompany] = useState('');
//   const [position, setPosition] = useState('');
//   const [files, setFiles] = useState([]);
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignUpAdminClick = async (e) => {
//     e.preventDefault();
//     const photoEncode = files[0]?.getFileEncodeBase64String() || '';
//     if (!email || !name || !phone || !password || !company || !position || !confirmPassword || !photoEncode) {
//       toast({
//         title: "Please fill all the fields",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       return;
//     }
//     if (password !== confirmPassword) {
//       toast({
//         title: "Passwords do not match",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       return;
//     }
//     const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;
//     if (!passwordRegex.test(password)) {
//       toast({
//         title: "Password Validation Error",
//         description: "Password should contain at least one digit, one lowercase, and one uppercase letter. It must be at least 8 characters long.",
//         status: "warning",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//       return;
//     }
    
//     try {
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//         },
//       };
//       const response = await axios.post(
//         "http://localhost:5000/registerAdmin",
//         { name, email, password, phone, company, position, photoEncode },
//         config
//       );
  
//       if (response.data) {
//         toast({
//           title: "Registration Successful",
//           status: "success",
//           duration: 5000,
//           isClosable: true,
//           position: "bottom",
//         });
//         navigate('/');
//       } else {
//         toast({
//           title: "Error Occurred: No Data in Response",
//           status: "error",
//           duration: 5000,
//           isClosable: true,
//           position: "bottom",
//         });
//       }
//     } catch (error) {
//       toast({
//         title: "Error Occurred!",
//         description: error.response?.data?.message || "An error occurred",
//         status: "error",
//         duration: 5000,
//         isClosable: true,
//         position: "bottom",
//       });
//     }
//   }

//   return (
//     <MDBContainer fluid  id="signup">
//       <MDBRow>
//         <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
//           <h1 className="my-5 display-3 fw-bold ls-tight px-3">
//             The best offer <br />
//             <span className="text-primary">for your business</span>
//           </h1>
          
//         </MDBCol>

//         <MDBCol md='6'>
//           <MDBCard className='my-5'>
//             <MDBCardBody className='p-5'>
//               <FilePond
//                 className="mb-4"
//                 labelIdle="Drag & Drop your picture"
//                 files={files}
//                 allowMultiple={false}
//                 onupdatefiles={setFiles}
//                 imageResizeTargetWidth={50}
//                 imageResizeTargetHeight={50}
//                 acceptedFileTypes={["image/jpeg", "image/png", "images/gif"]}
//                 required={true}
//               />
//               <MDBRow>
//                 <MDBCol col='6'>
//                   <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' onChange={(e) => setName(e.target.value)} />
//                 </MDBCol>
//                 <MDBCol col='6'>
//                   <MDBInput wrapperClass='mb-4' label='Phone' id='form1' type='number' onChange={(e) => setPhone(e.target.value)} />
//                 </MDBCol>
//               </MDBRow>
//               <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' onChange={(e) => setEmail(e.target.value)} />
//               <MDBInput wrapperClass='mb-4' label='Company' id='form1' type='text' onChange={(e) => setCompany(e.target.value)} />
//               <MDBInput wrapperClass='mb-4' label='Position' id='form1' type='text' onChange={(e) => setPosition(e.target.value)} />
//               <MDBRow>
//                 <MDBCol col='6'>
//                   <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' onChange={(e) => setPassword(e.target.value)} />
//                 </MDBCol>
//                 <MDBCol col='6'>
//                   <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form1' type='password' onChange={(e) => setConfirmPassword(e.target.value)} />
//                 </MDBCol>
//               </MDBRow>
//               <div className="d-grid gap-2 col-3 mx-auto">
//                 <button className="btn btn-primary" type="button" style={{ background: "#222" }} onClick={handleSignUpAdminClick}>
//                   Sign Up As Admin
//                 </button>
//               </div>
//               <div className="text-center mt-4">
//                 <p style={{ marginBottom: "4px" }}>or</p>
//                 <div className="d-flex justify-content-center">
//                   <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
//                     <FaFacebook />
//                   </MDBBtn>
//                   <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
//                     <FaTwitter />
//                   </MDBBtn>
//                   <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
//                     <FaGoogle />
//                   </MDBBtn>
//                   <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
//                     <FaGithub />
//                   </MDBBtn>
//                 </div>
//                 <p>Already have an account?</p>
//                 <div className="d-grid gap-2 col-6 mx-auto">
//                   <button className="btn btn-primary" type="button" style={{ background: "#222" }} onClick={() => navigate('/login')}>
//                     Login
//                   </button>
//                 </div>
//               </div>
//             </MDBCardBody>
//           </MDBCard>
//         </MDBCol>
//       </MDBRow>
//     </MDBContainer>
//   );
// }

// export default SignUpAdmin;
import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FilePond, registerPlugin } from "react-filepond";
import { FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput
} from 'mdb-react-ui-kit';
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import { useToast } from "@chakra-ui/react";

import '../App.css';

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginFileEncode,
  FilePondPluginImageResize,
  FilePondPluginImageTransform,
  FilePondPluginFileValidateType
);

function SignUpAdmin(props) {
  const toast = useToast();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [company, setCompany] = useState('');
  const [position, setPosition] = useState('');
  const [files, setFiles] = useState([]);
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUpAdminClick = async (e) => {
    e.preventDefault();
    const photoEncode = files.length > 0 ? files[0].getFileEncodeBase64String() : '';
    if (email === '' || name === '' || phone === '' || password === '' || company === '' || position === '' || confirmPassword === '' || photoEncode === '') {
      toast({
        title: "Please Fill all the Fields",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }
    if (password !== confirmPassword) {
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
        description: "Password should contain at least one digit, one lowercase, and one uppercase letter. It must be at least 8 characters long.",
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
        "http://localhost:5000/registerAdmin",
        {
          name,
          email,
          password,
          phone,
          company,
          position,
          photoEncode
        },
        config
      );

      if (response.data) {
        toast({
          title: "Registration Successful",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
        navigate('/')
      } else {
        toast({
          title: "Error Occurred: No Data in Response",
          status: "error",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }

    } catch (error) {
      toast({
        title: "Error Occurred!",
        description: error.response?.data?.message || "An error occurred",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  }

  return (
    <MDBContainer fluid id="signup">
      <MDBRow>
        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
           Signup to continue<br />
            <span className="text-primary">to application</span>
          </h1>
          <p className='px-3' style={{ color: 'hsl(217, 10%, 50.8%)' }}>
            Have an enchanting experience by building your profile and making connections
            with your friends. Upload your resume to attract employers.
          </p>
        </MDBCol>
        <MDBCol md='6'>
          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>
              <FilePond
                className="mb-4"
                labelIdle="Drag & Drop your picture"
                files={files}
                allowMultiple={false}
                onupdatefiles={setFiles}
                imageResizeTargetWidth={50}
                imageResizeTargetHeight={50}
                acceptedFileTypes={["image/jpeg", "image/png", "images/gif"]}
                required={true}
              />
              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Name' id='form1' type='text' onChange={(e) => setName(e.target.value)} />
                </MDBCol>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Phone' id='form1' type='number' onChange={(e) => setPhone(e.target.value)} />
                </MDBCol>
              </MDBRow>
              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' onChange={(e) => setEmail(e.target.value)} />
              <MDBInput wrapperClass='mb-4' label='Company' id='form1' type='text' onChange={(e) => setCompany(e.target.value)} />
              <MDBInput wrapperClass='mb-4' label='Position' id='form1' type='text' onChange={(e) => setPosition(e.target.value)} />
              <MDBRow>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' onChange={(e) => setPassword(e.target.value)} />
                </MDBCol>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Confirm Password' id='form1' type='password' onChange={(e) => setConfirmPassword(e.target.value)} />
                </MDBCol>
              </MDBRow>
              <div className="d-flex gap-2 col-3 mx-auto justify-content-center">
                <button className="btn btn-primary" type="button" style={{ background: "#222" }} onClick={handleSignUpAdminClick}>SignUp As Admin</button>
              </div>
              <div className="d-flex gap-2 col-3 mx-auto justify-content-center mt-3">
                <button className="btn btn-secondary" type="button" onClick={() => navigate('/signup-user')}>SignUp As User</button>
              </div>
              <div className="text-center" style={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                <p style={{ marginBottom: "4px" }}>or </p>
                <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
                  <FaFacebook />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
                  <FaTwitter />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
                  <FaGoogle />
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='mx-3 my-2' style={{ color: '#1266f1' }}>
                  <FaGithub />
                </MDBBtn>
              </div>
              <p style={{ textAlign: "center" }}>Already have an account: </p>
              <div className="d-grid gap-2 col-6 mx-auto">
                <button className="btn btn-primary" type="button" style={{ background: "#222" }} onClick={() => navigate('/login')}>Login</button>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default SignUpAdmin;
