import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Header from '../Header/Header'

const EditTode = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("Male");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:5000/users/${id}`);
    setName(response.data.name);
    setEmail(response.data.email);
    setGender(response.data.gender);
  };

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/users/${id}`, {
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
    <div><Header />
    <div className='from'>
        <div className='form-body'>
        <h2>Edit Todo Form</h2>
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

            <button onClick={updateUser}>ADD</button>
        </div>
    </div>
    </div>
  )
}

export default EditTode