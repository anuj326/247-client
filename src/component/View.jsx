import React, { useState } from 'react'

function View() {
    const [user, setUser] = useState({
        email:''
      });
    
    
    let   name , value;
    const handelInputs = (e) =>{
    
        e.preventDefault();
        name =  e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value})
        
    }
    const{email} = user;
    console.log(email);
    async function PostData(){
        const response = await fetch('http://localhost:8000/user',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
              },
            body:JSON.stringify({
                email,
            })
        });
        const data = await response.json();
        console.log(data);
    }
  return (
    <div>
        <form className='form-control' >
            <label htmlFor="">Enter Email</label>
            <input className='form-control'  type="email" name='email'
            value={user.email}
            onChange={handelInputs}
            /> <br />
            <div className='d-grid grid-2'>
                <button className='btn btn-info'  onClick={PostData}>Submit</button>
            </div>
        </form>
        <div></div>
    </div>
  )
}

export default View