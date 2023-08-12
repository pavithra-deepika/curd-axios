import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './style.css';


function Create() {
    const [inputData, setInputData] = useState({
        name:'',
        email: ''
    })
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/users', inputData) 
        .then(res => {
            alert("Data post sucessfully!")
            navigate('/')
        })
    }
  return (
    <div className='form-container'>
        <div className='input'>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label> <br />
                    <input type='text' className='form-control' name='name'
                    onChange={e => setInputData({...inputData, name:e.target.value})} />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label><br />
                    <input type='text' className='form-control' name='email' 
                    onChange={e => setInputData({...inputData, email:e.target.value})} />

                    <br />
                    <button className='btn-info' type='submit'>Submit</button>
                </div>
            </form>
        </div>
        
    </div>
  )
}

export default Create