import React from "react";
import SignUpAdmin from "./SignupAdmin";
import SignUpUser from "./SignupUser";
function SignUp(props){
    return (
        <div>
        <SignUpAdmin setLoginForm = {props.setLoginForm} />
      
        </div>
    )
}
export default SignUp;