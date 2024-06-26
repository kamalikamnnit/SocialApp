import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBTypography
} from 'mdb-react-ui-kit';

const ResetPassword = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    console.log('Token:', token); // Log token value when component mounts
  }, []); // Run this effect only once, when the component mounts

  

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      setMessage('');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/resetPassword', { token, newPassword });
      
      setMessage(response.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
      setMessage('');
    }
  };

  return (
    <MDBContainer className="d-flex flex-column align-items-center" style={{ marginTop: '2rem' }}>
      <MDBTypography tag="h2" className="mb-4">Reset Password</MDBTypography>
      <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px' }}>
        <div className="mb-4">
          <MDBInput
            label="New Password"
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <MDBInput
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <MDBBtn type="submit" block>Reset Password</MDBBtn>
       <br></br>
        <MDBBtn type="submit" block onClick={ () => navigate('/')}>Back</MDBBtn>
      </form>
      {message && (
        <MDBContainer className="mt-4" style={{ color: 'green' }}>
          {message}
        </MDBContainer>
      )}
      {error && (
        <MDBContainer className="mt-4" style={{ color: 'red' }}>
          {error}
        </MDBContainer>
      )}
    </MDBContainer>
  );
};

export default ResetPassword;
