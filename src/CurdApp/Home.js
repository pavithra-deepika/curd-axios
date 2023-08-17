
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  const [data, setData] = useState([]);    
  const navigate = useNavigate();


  useEffect(() => {
    axios.get("http://localhost:3001/users")
      .then(res => setData(res.data))
      .catch(err => console.log(err))
  }, [data]);

  function handleDelete(id) {
    const confirm = window.confirm("Do you want to delete?")
    if(confirm) {
      axios.delete("http://localhost:3001/users/"+ id)
      .then( res => {
        alert("Recorded deleted")
        navigate('/')
  
      })
    }

  }

  return (
    <div classsName='container mt-5'>
      <h2>Crud App with Json Server</h2>
      <Link to="/create" className='btn btn-success my-3'>Create +</Link>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, idx) => (
              <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Link className='text-decoration-none btn btn-sm btn-success' to={`/Update/${item.id}`}>Update</Link>
                  <button className='text-decoration-none btn btn-sm btn-danger' onClick={e => handleDelete(item.id)}>Delete</button>

                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}