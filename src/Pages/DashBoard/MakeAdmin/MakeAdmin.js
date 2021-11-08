import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState()
    const handleAdminSubmit = e => {
        e.preventDefault()
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onChange={handleAdminSubmit}>

            </form>
        </div>
    );
};

export default MakeAdmin;