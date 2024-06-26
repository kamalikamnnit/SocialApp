import React from 'react';
import { FaFacebook,FaGithub,FaInstagram,FaGoogle,FaTwitter ,FaLinkedin} from "react-icons/fa";
import {
  MDBFooter,
  MDBContainer,

  MDBBtn
} from 'mdb-react-ui-kit';

 function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: 'black' }}>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <FaFacebook/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <FaTwitter/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <FaGoogle/>
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <FaInstagram/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <FaLinkedin/>
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <FaGithub/>
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' >
        © 2024 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Connectify.com
        </a>
      </div>
    </MDBFooter>
  );
}

export default Footer;