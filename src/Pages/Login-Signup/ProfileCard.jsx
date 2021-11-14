import React from "react";
import { Button } from "react-bootstrap";
import confirmIt from "../../Shared/Components/Alart_Confirm/confirmIt";

const ProfileCard = ({ user, handleSignOut }) => {
  const classes =
    "p-2 outline-1 rounded-3 bg-glass mb-3 border border-1 nav-link";
  return (
    <>
      <div className={classes}>{user.displayName}</div>
      <div className={classes}>{user.email}</div>
      <Button
        variant="danger"
        onClick={() =>
          confirmIt(handleSignOut, {
            text: "You will be Logged Out !",
            confirmButtonText: "Log Out",
            final :"Logged Out"
          })
        }
      >
        Logout
      </Button>
    </>
  );
};

export default ProfileCard;
