
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './style.css';
function Home() {
  const [data, setData] = useState([])


useEffect(() => {
  axios.get('http://localhost:3000/users')
  .then(res => setData(res.data))
  .catch(err => console.log(err))
}, [])
console.log("1111", data)
  return (
    <div className='container'>
      <h1>Curd App with JSON server</h1>
      <Link to="/create" className='btn' > Create User</Link>
      <table className='table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, id) =>
          (
            <tr key={id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button id='update'>Update</button>
                <button id='delete'> Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default Home