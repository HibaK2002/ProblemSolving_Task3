//Q1 
import React from 'react';
const NamesList = ({ users }) => { 
  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user.name}</li>
      ))}
    </ul>
  );
};

export default NamesList;
