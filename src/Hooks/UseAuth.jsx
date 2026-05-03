import React, { use } from 'react'
import { AuthContext } from './../Context/Authcontext/AuthContext';

export const UseAuth = () => {
    const authInfo = use(AuthContext)
  return (
    authInfo
  )
}
