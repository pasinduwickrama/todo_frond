import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import './todo.css'
const TodoForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Male");
    const navigate = useNavigate();

    const saveUser = async (e) => {
        e.preventDefault();
        try {
          await axios.post("http://localhost:5000/users", {
            name,
            email,
            gender,
          });
          navigate("/");
        } catch (error) {
          console.log(error);
        }
      };

    
  return (
    <div className='from'>
        <div className='form-body'>
        <h2>Todo Form</h2>
            <input type='text'  
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
              />
            <input type='email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email" />

            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
            </select>

            <button onClick={saveUser}>ADD</button>
        </div>
    </div>
  )
}

export default TodoForm