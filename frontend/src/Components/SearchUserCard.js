
import React, { useState } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";

function SearchUserCard(userToFollowname,currentUserId) {
  const toast = useToast(); // Properly initialize the toast
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  
  const handleConnect = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await axios.post(
        "http://localhost:5000/follow",
        {
          userIdToFollow: userInfo._id, // User to be followed
          userwhowantsttofollow: currentUserId, // Current user who wants to follow
        },
        config
      );

      if (response.data) {
        toast({
          title: "Connection request sent",
          status: "success",
          duration: 5000,
          isClosable: true,
          position: "bottom",
        });
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
      console.log(error);
      toast({
        title: "Error Occurred!",
        description: error.response?.data?.message || "An error occurred",
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
    }
  };

  const renderConnectButton = () => {
    const isConnect = false; // Replace with real logic to determine connection status

    return (
      <button
        className={`btn ${isConnect ? "btn-secondary" : "btn-primary"}`}
        onClick={isConnect ? null : handleConnect}
        disabled={isConnect} // Disable button if already connected
      >
        {isConnect ? "Connected" : "Connect"}
      </button>
    );
  };

  return (
    <div className="w-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-row items-center pb-4">
        <span className="text-lg text-black dark:text-gray-300">
          {userToFollowname} {/* Show the user's name */}
        </span>
      </div>
      <div className="flex items-center justify-between px-4">
        {renderConnectButton()} {/* Render the connect button */}
      </div>
    </div>
  );
}

export default SearchUserCard;
