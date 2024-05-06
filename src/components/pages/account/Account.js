import React from 'react'
import { AuthData } from '../../../auth/Authwrapper'

const Account = () => {

  const { user } = AuthData();
  
  return (
    <div className='page'>
      <h2>Your Account</h2>
      <p>Username: {user.name}</p>
    </div>
  )
}

export default Account