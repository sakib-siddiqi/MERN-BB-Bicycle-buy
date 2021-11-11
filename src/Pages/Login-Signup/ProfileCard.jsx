import React from 'react';
import { Button } from "react-bootstrap";
const ProfileCard = ({ user, handleSignOut }) => {
    return (
        <>
            <div className="p-2 outline-1 rounded-3 bg-glass mb-3 border border-1 nav-link">{user.displayName}</div>
            <div className="p-2 outline-1 rounded-3 bg-glass mb-3 border border-1 nav-link">{user.email}</div>
            <Button variant="danger" onClick={() => handleSignOut()}>Logout</Button>
        </>
    );
};

export default ProfileCard;