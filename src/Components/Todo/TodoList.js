import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { GrDocumentUpdate } from 'react-icons/gr'
import {MdOutlineDelete } from 'react-icons/md'
const TodoList = () => {
  const [users, setUser] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const response = await axios.get("http://localhost:5000/users");
    setUser(response.data);
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/users/${id}`);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='list-bady'>
    
      
        <div className='list-list' >
        {users.map((user, index) => (
          <div  key={user._id} className='c'>
                <li>{index + 1}</li>
                <li>{user.name}</li>
                <li>{user.email}</li>
                <li>{user.gender}</li>
                <Link to={`edit/${user._id}`}><GrDocumentUpdate size={25} color='green' /></Link>
            <li  onClick={() => deleteUser(user._id)}><MdOutlineDelete size={35} color='red' /></li>
          </div>
          ))}
        </div>
     
    </div>
  )
}

export default TodoList