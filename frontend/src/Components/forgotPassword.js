// import React, { useState } from 'react';
// import axios from 'axios';
// import NavBar from './Navbar';

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/forgetPassword', { email });
//       setMessage(response.data.message);
//       setError('');
//     } catch (err) {
//       setError(err.response?.data?.message || 'Something went wrong');
//       setMessage('');
//     }
//   };

//   return (
//     <>
//       <NavBar />
//       <div>
//         <h2>Forgot Password</h2>
//         <form onSubmit={handleSubmit}>
//           <div>
//             <label>Email:</label>
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <button type="submit">Submit</button>
//         </form>
//         {message && <p style={{ color: 'green' }}>{message}</p>}
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//       </div>
//     </>
//   );
// };

// export default ForgotPassword;
import React, { useState } from 'react';
import axios from 'axios';
import NavBar from './Navbar';
import { useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBInput,
  MDBBtn,
  MDBTypography
} from 'mdb-react-ui-kit';

const ForgotPassword = () => {
    const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/forgetPassword', { email });
      setMessage(response.data.message);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Something went wrong');
      setMessage('');
    }
  };

  return (
    <>
      <NavBar />
      <MDBContainer className="d-flex flex-column align-items-center" style={{ marginTop: '2rem' }}>
        <MDBTypography tag="h2" className="mb-4">Forgot Password</MDBTypography>
        <form onSubmit={handleSubmit} style={{ width: '100%', maxWidth: '500px' }}>
          <div className="mb-4">
            <MDBInput
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <MDBBtn type="submit" block>Submit</MDBBtn>
          <div className="mb-4">
          <br></br>
          <br></br>
        <MDBBtn type ="button" block onClick={ () => navigate('/')}>Back</MDBBtn>
        </div>
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
    </>
  );
};

export default ForgotPassword;
