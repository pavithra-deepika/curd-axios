
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export default function Home() {
  // npx json-server --watch db.json --port 3001 json server link
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
    <div classsName='container mt-5 mx-5'>
      <h2 class="text-center fs-1">Crud App with Json Server</h2>
      <Link to="/create" className='btn btn-success my-4 mx-5 fs-5 '  >Create +</Link>
      <table className='table table-bordered mx-5 w-75'>
        <thead class="table-light fs-4">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody class="table-light fs-5">
          {
            data.map((item, idx) => (
              <tr key={idx}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Link className='text-decoration-none btn btn-sm btn-success' to={`/Update/${item.id}`}>Update</Link>
                  <button className='text-decoration-none btn btn-sm btn-danger mx-3'  onClick={e => handleDelete(item.id)}>Delete</button>

                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}