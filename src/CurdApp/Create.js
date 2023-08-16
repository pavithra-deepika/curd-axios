import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { TextField } from '@mui/material';


function Create() {
    const [inputData, setInputData] = useState({
        name:'',
        email: ''
    })
    useEffect(() => {

    }, [inputData])
    
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/users', inputData) 
        .then(res => {
            alert("Data post sucessfully!")
            navigate('/')
        })
    }
  return (

    <Card sx={{ width: 800, minWidth: 250 , mt:30, height:400, ml:52, backgroundColor: '#c7f7d4'
    }}>
        <form onSubmit={handleSubmit}>

    <CardContent>
      <Typography sx={{width: 500, ml: 3,} } variant="h5" component="div">
      <label htmlFor='name'>Name:</label>
      </Typography>
      <Typography sx={{ml:3, mb:2, mt:3, }}> 
                    <TextField sx={{width: 700}} type='text' variant="outlined" className='form-control' name='name' 
                    onChange={e => setInputData({...inputData, name:e.target.value})} />
      </Typography>
      <Typography variant="h5" component="div" sx={{width: 500, ml: 3, } }>
      <label htmlFor='email'>Email:</label>
        </Typography>
        <Typography sx={{ml:3, mb:2, mt:3}}>
                    <TextField sx={{width: 700}} type='text' variant="outlined" className='form-control' name='email' 
                    onChange={e => setInputData({...inputData, email:e.target.value})} />

          </Typography>
    </CardContent>
    <CardActions variant="h5"  sx={{ml:4,mb:6}}>
    <Button variant="contained" color="secondary" type='submit' size='large' >Submit</Button>
    </CardActions>
                    </form>
  </Card>
    );
}   
export default Create