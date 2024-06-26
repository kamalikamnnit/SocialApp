

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './Pages/HomePage';
import Dashboard from './Pages/Dashboard';
import LoginPage from './Components/LoginPage';
import CreatePost from './Components/CreatePost';
import EditProfile from "./Components/Editprofile";
import ShowPosts from './Components/ShowPosts';
import SignUp from './Components/Signup';
import SignUpUser from './Components/SignupUser';
import RequireAuth from './Components/RequireAuth';
import UserPosts from './Components/Userposts';
import Addphoto from './Components/AddPhoto';
import PostDetails from './Components/PostDetails';
import ForgotPassword from './Components/forgotPassword';
import { AuthProvider } from './contexts/Authcontexts';
import ResetPassword from './Components/ResetPassword';
import Chatbot from './Components/Chatbot'; // Import the Chatbot component

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              // <RequireAuth>
              <Dashboard />
              // {/* </RequireAuth> */}
            }
          />
          
          <Route path="/" element={<HomePage />} />
          <Route path='/addPost' element={<CreatePost />} />
          <Route path="/signup-user" element={<SignUpUser />} />
          <Route path='/showAllPosts' element={<ShowPosts />} />
          <Route path='/getUserPosts' element={<UserPosts />} />
          <Route path='/editprofile' element={<EditProfile />} />
          <Route path='/add-photo' element={<Addphoto />} />
          <Route path='/forgetPassword' element={<ForgotPassword />} />
          <Route path='/resetPassword/:token' element={<ResetPassword />} />
          <Route path='/newsbot' element={<Chatbot/>}/>
          <Route path="/register" element={<SignUp />} />
        </Routes>
     {/* Include the Chatbot component */}
      </AuthProvider>
    </Router>
  );
}

export default App;
