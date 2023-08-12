
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Home() {
  const [data, setData] = useState([])


useEffect(() => {
  axios.get('http://localhost:3000/users')
  .then(res => setData(res.data))
  .catch(err => console.log(err))
}, [])
console.log("1111", data)
  return (
    <div className='container mt-5'>
      <h1>Curd App with JSON server</h1>
      <Link to="/create" className='btn btn-success'> Create User</Link>
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
                <button>Update</button>
                <button>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default Home