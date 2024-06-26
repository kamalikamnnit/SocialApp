
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarDash from "./NavbarDash";
import { useToast } from "@chakra-ui/toast";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import FilePondPluginFileEncode from "filepond-plugin-file-encode";
import FilePondPluginImageResize from "filepond-plugin-image-resize";
import FilePondPluginImageTransform from "filepond-plugin-image-transform";
import FilePondPluginFileValidateType from "filepond-plugin-file-validate-type";

registerPlugin(
  FilePondPluginImagePreview,
  FilePondPluginFileEncode,
  FilePondPluginImageResize,
  FilePondPluginImageTransform,
  FilePondPluginFileValidateType
);

const EditProfile = () => {
  const toast = useToast();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [files, setFiles] = useState([]);

  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name);
      setEmail(userInfo.email);
      setPhone(userInfo.phone);
    }
  }, []);

  const handleUserUpdate = async (e) => {
    e.preventDefault();

    if (!email || !name || !phone) {
      toast({
        title: "Please fill all the fields",
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

      const response = await axios.put(
        "http://localhost:5000/editProfile",
        {
          email,
          name,
          phone,
          id: userInfo._id,
        },
        config
      );

      if (response.status === 200) {
        const updatedUserInfo = {
          ...userInfo,
          email,
          name,
          phone,
        };
        localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));

        toast({
          title: "Profile updated successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast({
        title: "Error",
        description: "Failed to update profile",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const uploadProfileImage = async () => {
    if (files.length === 0) {
      toast({
        title: "Please upload an image",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      return;
    }

    const photoEncode = files[0].getFileEncodeBase64String();
    const photoType = files[0].fileType;

    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await axios.post(
        'http://localhost:5000/profile/upload',
        {
          photoEncode,
          photoType,
          userId: userInfo._id,
        },
        config
      );

      if (response.data.message) {
        toast({
          title: "Profile image uploaded successfully",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });

        // Update local storage and profile image
        const updatedUserInfo = {
          ...userInfo,
          post: response.data.photoURL, // Assuming the server returns the updated photo URL
        };
        localStorage.setItem("userInfo", JSON.stringify(updatedUserInfo));
      }
    } catch (error) {
      console.error("Error uploading profile image:", error);
      toast({
        title: "Error",
        description: "Failed to upload profile image",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  return (
    <>
      <NavbarDash />
      <div className="container rounded bg-white mt-5">
        <div className="row">
          <div className="col-md-4 border-right">
            <div className="d-flex flex-column align-items-center text-center p-3 py-5">
              <img
                className="rounded-circle mt-5"
                src={userInfo.post} // Display updated profile image
                width="90"
                alt="Profile"
              />
            </div>
          </div>
          <div className="col-md-8">
            <div className="p-3 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="text-right">Edit Profile</h6>
              </div>
              <FilePond
                className="mb-4"
                labelIdle="Drag & Drop your picture"
                files={files}
                allowMultiple={false}
                onupdatefiles={setFiles}
                imageResizeTargetWidth={450}
                imageResizeTargetHeight={450}
                acceptedFileTypes={["image/jpeg", "image/png", "image/gif"]}
                required={true}
              />
              <div className="d-flex gap-2 col-3 mx-auto justify-content-center">
                <button
                  className="btn btn-primary"
                  type="button"
                  style={{ background: "#222" }}
                  onClick={uploadProfileImage}
                >
                  Add Profile Image
                </button>
              </div>
              <div className="row mt-2">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  placeholder="Your username"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="row mt-3">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  placeholder="Your email"
                  type="email"
                  className="form-control"
                />
                <div className="col-md-6">
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    placeholder="Your phone number"
                    type="phone"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="mt-5 text-center">
                <button
                  onClick={handleUserUpdate}
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Save Profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
