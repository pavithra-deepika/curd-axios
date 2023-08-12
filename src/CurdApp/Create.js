import React from 'react'

function Create() {
  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className='input'>
            <fotm>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' className='form-control' name='name' />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input type='text' className='form-control' name='email' />
                    <br />
                    <button className='btn btn-info'>Submit</button>
                </div>
            </fotm>
        </div>
        
    </div>
  )
}

export default Create