import React, { useState } from 'react'


function Register() {

    const [user, setUser] = useState({
        personal_name:'', email:'', username:'', contact:''
      });
    
    
    let   name , value;
    const handelInputs = (e) =>{
    
        e.preventDefault();
        name =  e.target.name;
        value = e.target.value;
        setUser({...user, [name]: value})
        //console.log(user.email);
    }
    const{personal_name, email, username, contact} = user;
    console.log(personal_name, email, username, contact);
   async function PostData(){
      const res = await fetch('http://localhost:8000/register',{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
              },
            body:JSON.stringify(
               { personal_name,
                email,
                username,
                contact}
            )
        });
        const data = await res.json();
        console.log(data);
    }

  return (
    <div className='container'>
        <form className='form-control'>
            <h1 className='text-center'>Register Here</h1>
            <label htmlFor="">Personal Name</label>
            <input className='form-control' type="text" name='personal_name'
                value={user.personal_name}
                onChange={handelInputs}
            />
            <label htmlFor="">Email</label>
            <input className='form-control' type="email" name="email" 
            value={user.email}
            onChange={handelInputs}
            /> 
            <label htmlFor="">Username</label>
            <input  className='form-control'type="text" name='username' 
            value={user.username}
            onChange={handelInputs}
            /> 
            <label htmlFor="">Contact</label>
            <input className='form-control' type="text" name="contact" 
            value={user.contact}
            onChange={handelInputs}
            /> <br />
            <input className='form-control' type="file" />  <br />
            <div className='d-grid gap-2'>
              <button className='btn btn-info' onClick={PostData} >Submit</button>
            </div>
        </form>
    </div>
  )
}

export default Register