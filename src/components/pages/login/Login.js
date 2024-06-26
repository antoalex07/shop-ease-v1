import React, { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthData } from '../../../auth/Authwrapper';

const Login = () => {
  const navigate = useNavigate();
  const { login } = AuthData();
  const [formData, setFormData] = useReducer((formData, newItem) => {
    return ({...formData, ...newItem})
  })
  const [errorMessage, setErrorMessage] = useState(null);

  const doLogin = async () => {
    try {
      
      await login(formData.userName, formData.password)
      navigate("/account")

    } catch (error) {
      setErrorMessage(error);
    }
  }

  return (
    <div className="page">
      <h2>Login Page</h2>
      <div className="inputs">
        <div className='input'>
          <input 
            //defaultValue={formData.userName} 
            onChange={(e) => 
              setFormData({userName: e.target.value})}
            type="text"
            />
          </div>
          <div className='input'>
            <input 
              //defaultValue={formData.password}
              onChange={(e) => 
                setFormData({password: e.target.value})}
              type='password'
            />
          </div>
          <div className='button'>
            <button onClick={doLogin}>Log in</button>
          </div>
          {errorMessage ?
            <div className='error'>{errorMessage}</div> : null 
          }
      </div>
    </div>
  )
}

export default Login