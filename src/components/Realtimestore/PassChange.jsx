// ChangePassword.js
import React, { useState } from 'react';

function ChangePassword({ activeUser, data, setData }) {
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();

    if (!activeUser) {
      alert('No active user found. Please log in again.');
      return;
    }

    // Check if the current password matches the active user's password
    if (activeUser.password === passwords.currentPassword) {
      // Check if the new password and confirm password match
      if (passwords.newPassword === passwords.confirmPassword) {
        // Update the password in the activeUser object
        const updatedUser = { ...activeUser, password: passwords.newPassword };

        // Update the user data in localStorage
        const updatedData = data.map((user) =>
          user.userID === activeUser.userID ? updatedUser : user
        );

        setData(updatedData);
        localStorage.setItem('User', JSON.stringify(updatedData));

        alert('Password updated successfully!');
      } else {
        alert('New password and confirm password do not match. Please try again.');
      }
    } else {
      alert('Current password is incorrect. Please try again.');
    }
  };

  return (
    <div className='change-password'>
      <h1 className='text-center mt-4 mb-5 text-primary'>Change Password</h1>
      <form onSubmit={handlePasswordChange} className='bg-warning text-center text-light'>
        <label htmlFor='currentPassword' className='fs-5'>
          Current Password
        </label>
        <input type='password' name='currentPassword' onChange={handleChange} required />

        <label htmlFor='newPassword' className='fs-5'>
          New Password
        </label>
        <input type='password' name='newPassword' onChange={handleChange} required />

        <label htmlFor='confirmPassword' className='fs-5'>
          Confirm Password
        </label>
        <input type='password' name='confirmPassword' onChange={handleChange} required />

        <button type='submit'>Change Password</button>
      </form>
    </div>
  );
}

export default ChangePassword;
