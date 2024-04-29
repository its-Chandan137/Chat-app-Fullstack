import React from 'react'
import axios from "axios"

export const AuthPage = (props) => {

    const onsubmit = (e) => {
        e.preventDefault();
        const {value} = e.target[0];
        axios.post('http://localhost:3001/authenticate',
        {username: value}
        ).then(r => 
            props.onAuth({...r.data,secret: value})
        )
        .catch (e => console.log("error : ", e))
    };

  return (
    <div className='background'>
        <form onSubmit={onsubmit} className='form-card'>
            <div className="form-title">
                Welcome...
            </div>
            <div className="form-subtitle">
                Set a user to Start
            </div>
            <div className="auth">
                <div className="auth-label">Username</div>
                <input autoFocus className='auth-input' name='username' />
                <button className='auth-button' type='submit'>Enter</button>
            </div>
        </form>
    </div>
  )
}
