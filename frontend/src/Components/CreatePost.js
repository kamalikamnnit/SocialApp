import React, { useState } from 'react'
import { FilePond,registerPlugin} from "react-filepond";
import TextInput from './TextInput';
import axios from 'axios'
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
import NavbarDash from './NavbarDash'
  import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";
import { useToast } from "@chakra-ui/react";
registerPlugin(
	FilePondPluginImagePreview,
	FilePondPluginFileEncode,
	FilePondPluginImageResize,
	FilePondPluginImageTransform,
	FilePondPluginFileValidateType
);

  
function CreatePost(){
    const [files,setFiles]=useState('')
    const [caption,setCaption]=useState('')
	const toast=useToast()
	const handlePostData =async (e) => {
e.preventDefault();
const userInfo = JSON.parse (localStorage.getItem("userInfo"));
const userId=userInfo._id;
console.log(userInfo)

		
		// the Index 0 means the first file , we will add in the future the support of multiple
		// images upload , the max will be 10 images per post
		const photoEncode = files[0].getFileEncodeBase64String();
		const photoType = files[0].fileType;
		console.log(photoEncode)
		
		if(!caption || !files) {
			toast({
				title: "Please Fill all the Fields",
				status: "warning",
				duration: 5000,
				isClosable: true,
				position: "bottom",
			  });
		   
			  return;
		}
		try{ 
			const config = {
			headers: {
			  "Content-type": "application/json",
			},
		  };

	const response=await axios.post(
			'http://localhost:5000/createPost',
			{
				title: caption,
				body: caption,
				photoEncode,
				photoType,
				userId
			},
			config
		).then((rep) => {
			if (rep.data.message) {
				// setQuery("success");
				toast({
					title: "Image Posted",
					status: "success",
					duration: 5000,
					isClosable: true,
					position: "bottom",
				  });
			}
		});
	}

catch(error){
console.log(error)
}
	}

	

    return (
        <>
		<NavbarDash/>
 <MDBCard className='my-5'>
    <MDBCardBody className='p-5'>
   
	<FilePond
        class="mb-4"
        labelIdle="Drag & Drop your picture"
        files={files}
        allowMultiple={false}
        onupdatefiles={setFiles}
        imageResizeTargetWidth={450}
        imageResizeTargetHeight={450}
        acceptedFileTypes={["image/jpeg", "image/png", "images/gif"]}
        required={true}
    />
	<br></br>
                <MDBCol col='6'>
                  <MDBInput wrapperClass='mb-4' label='Caption' id='form1' type='text' onChange={(e) => setCaption(e.target.value)}/>
                </MDBCol>
 
              
              <div class="d-flex gap-2 col-3 mx-auto justify-content-centre">
    
     <button class="btn btn-primary" type="button" style={{background: "#222"}} onClick={handlePostData}>Add Post</button>
               </div>
           
            </MDBCardBody>
         </MDBCard>


        </>
    )
}
export default CreatePost;