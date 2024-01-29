// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Login from './Login';
// import Signup from './SignUp';
// function Home() {
//   const [userData, setUserData] = useState(() => {
//     return JSON.parse(localStorage.getItem('CurrentUser')) || {};
//   });

//   useEffect(() => {
//     setUserData(JSON.parse(localStorage.getItem('CurrentUser')) || {});
//   }, []);


//   const [formData, setFormData] = useState({
//     userID: '',
//     number: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });


//   const [editIndex, setEditIndex] = useState(null);
//   const handleEditStudent = (index) => {
  
//     const studentToEdit = userData[index];
//     setFormData({ ...userData });
//     setEditIndex(index);
//   };






//   // const handleAddStudent = () => {
//   //   if (editIndex !== null) {
//   //     // Update existing student
//   //     const updatedStudents = [...userData];
//   //     updatedStudents[editIndex] = formData;
//   //     setUserData(updatedStudents);
//   //     setEditIndex(null);
//   //   } else {
//   //     // Add new student
//   //     setStudents([...students, formData]);
//   //   }


  

  
//   const navigate = useNavigate();

//   // useEffect(() => {
//   //   // Check if the user is not logged in, then navigate back to the login page
//   //   if (!activeUser) {
//   //     navigate('/login');
//   //   }
//   // }, [activeUser, navigate]);

//   return (
//     <div>
//       <h1 className='text-center'>Student List System</h1>
//       <div>
//         <table border={1} className='col-12'>
//           <thead className='text-center'>
        
//             Students
//           </thead>
//           <tbody>
//             <tr className='br-3 col-12 mt-5'>
//               <td border={1}>Student ID:</td>
//               <td>Contact:</td>
//               <td>E-Mail: </td>
//               <td>Password: </td>
//               <td>Confirm-Password: </td>

//             </tr>
//             <tr>
//               <td> {userData.userID}</td>
//               <td> {userData.number}</td>
//               <td>{userData.email}</td>
//               <td>{userData.password}</td>
//               <td>{userData.confirmpassword}</td>
//               <button onClick={handleEditStudent}>Edit</button>
//             </tr>

//           </tbody>

//         </table>

//         {/* Add other fields as needed */}
//       </div>
//     </div>
//   );
// }

// export default Home;










import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';



function Home() {





  const studentObject = {
    "1": { userID: "1", number: "123", email: "example@example.com", password: "pass123", confirmPassword: "pass123" },
    "2": { userID: "2", number: "456", email: "another@example.com", password: "pass456", confirmPassword: "pass456" }
  };




  const studentArray = Object.values(studentObject);




  const [students, setStudents] = useState(() => JSON.parse(localStorage.getItem('CurrentUser')) || []
    // const studentArray = Array.isArray(storedData) ? storedData : Object.values(storedData);
    // return studentArray;
   );

 console.log(students)
  const [formData, setFormData] = useState({
    userID: '',
    number: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    setStudents(JSON.parse(localStorage.getItem('CurrentUser')) || []);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddStudent = () => {
    if (editIndex !== null) {
      // Update existing student
      const updatedStudents = [...students];
      updatedStudents[editIndex] = formData;
      setStudents(updatedStudents);
      setEditIndex(null);

      // Update local storage
      localStorage.setItem('CurrentUser', JSON.stringify(updatedStudents));
    } else {
      // Add new student
      const newStudents = [...students, formData];
      setStudents(newStudents);

      // Update local storage
      localStorage.setItem('CurrentUser', JSON.stringify(newStudents));
    }

    // Clear the form data
    setFormData({
      userID: '',
      number: '',
      email: '',
      password: '',
      confirmPassword: '',
    });
  };

  const handleEditStudent = (index) => {
    // Set the form data for editing
    const studentToEdit = students[index];
    setFormData({ ...studentToEdit });
    setEditIndex(index);
  };

  const handleDeleteStudent = (index) => {
    // Delete student
    const updatedStudents = [...students];
    updatedStudents.splice(index, 1);
    setStudents(updatedStudents);

    // Update local storage
    localStorage.setItem('CurrentUser', JSON.stringify(updatedStudents));
  };

  const navigate = useNavigate();

  return (
    <div>
      <h1 className='text-center'>Student List System</h1>
      <table border={1} className='col-12'>
        <thead className='text-center'>
          <tr>
            <th>Student ID</th>
            <th>Contact</th>
            <th>E-Mail</th>
            <th>Password</th>
            <th>Confirm-Password</th>
            {/* <th>Actions</th> */}
          </tr>
        </thead>
        <tbody>
      
          <tr className='text-center'>
            <td>{students.userID}</td>
            <td>{students.number}</td>
            <td>{students.email}</td>
            <td>{students.password}</td>
            <td>{students.confirmPassword}</td>
            {/* <td>
                <button onClick={() => handleEditStudent()}>Edit</button>
                <button onClick={() => handleDeleteStudent()}>Delete</button>
              </td> */}
          </tr>
        </tbody>
      </table>
      {/* <div>
        <label>User ID:</label>
        <input type="text" name="userID" value={formData.userID} onChange={handleInputChange} />
  
        <button onClick={handleAddStudent}>{editIndex !== null ? 'Update' : 'Add'}</button>
      </div> */}
    </div>
  );
}

export default Home;









// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Home() {
//   const [students, setStudents] = useState(() => {
//     return JSON.parse(localStorage.getItem('Students')) || [];
//   });

//   const [formData, setFormData] = useState({
//     userID: '',
//     number: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const [editIndex, setEditIndex] = useState(null);

//   useEffect(() => {
//     setStudents(JSON.parse(localStorage.getItem('Students')) || []);
//   }, []);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleAddStudent = () => {
//     if (editIndex !== null) {
//       // Update existing student
//       const updatedStudents = [...students];
//       updatedStudents[editIndex] = formData;
//       setStudents(updatedStudents);
//       setEditIndex(null);
//     } else {
//       // Add new student
//       setStudents([...students, formData]);
//     }

//     // Clear the form data
//     setFormData({
//       userID: '',
//       number: '',
//       email: '',
//       password: '',
//       confirmPassword: '',
//     });

//     // Update local storage
//     localStorage.setItem('Students', JSON.stringify(students));
//   };

//   const handleEditStudent = (index) => {
//     // Set the form data for editing
//     const studentToEdit = students[index];
//     setFormData({ ...studentToEdit });
//     setEditIndex(index);
//   };

//   const handleDeleteStudent = (index) => {
//     // Delete student
//     const updatedStudents = [...students];
//     updatedStudents.splice(index, 1);
//     setStudents(updatedStudents);

//     // Update local storage
//     localStorage.setItem('Students', JSON.stringify(updatedStudents));
//   };

//   const navigate = useNavigate();

//   return (
//     <div>
//       {/* ... Your existing code ... */}
//       <tbody>
//         {students.map((student, index) => (
//           <tr key={index}>
//             <td>{student.userID}</td>
//             <td>{student.number}</td>
//             <td>{student.email}</td>
//             <td>{student.password}</td>
//             <td>{student.confirmPassword}</td>
//             <button onClick={() => handleEditStudent(index)}>Edit</button>
//             <button onClick={() => handleDeleteStudent(index)}>Delete</button>
//           </tr>
//         ))}
//       </tbody>
//       {/* ... Your existing code ... */}
//       <div>
//         <label>User ID:</label>
//         <input type="text" name="userID" value={formData.userID} onChange={handleInputChange} />
//         {/* Add similar input fields for other student data */}
//         <button onClick={handleAddStudent}>{editIndex !== null ? 'Update' : 'Add'}</button>
//       </div>
//       {/* ... Your existing code ... */}
//     </div>
//   );
// }

// export default Home;

