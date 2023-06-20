import React, { useEffect, useState } from 'react';
import './style.css';

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      // fetch('https://dummyjson.com/users')
      .then(response => response.json())
      .then(data => {
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          throw new Error('Data is not an array');
        }
      })
      .catch(error => console.error('Error:', error));
  }, []);


  return (
  <body>
  <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>City</th>
          {/* <th>Phone</th> */}
          
          <th>Company Name</th>
          <th>Website</th>
        </tr>
      </thead>
      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.address.city}</td>
            {/* <td>{user.phone}</td> */}
            <td>{user.company.name}</td>
            <td>{user.website}</td>
          </tr>
        ))}
      </tbody>
    </table></body>
  );
}

export default UserTable;

