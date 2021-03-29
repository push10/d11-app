import React from "react";
import { Redirect } from 'react-router-dom';
import { useSelector } from "react-redux";

const Profile = () => {
  const { user: currentUser } = useSelector((state) => state.auth);
  console.log("-----------> profile check state");
  if (!currentUser) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>
          <strong>{currentUser.username}</strong> Profile
        </h3>
      </header>
     
      <p>
        <strong>First Name:</strong> {currentUser.firstName}
      </p>
      <p>
        <strong>Last Name:</strong> {currentUser.lastName}
      </p>
     
    </div>
  );
};

export default Profile;