import { PageRoutes } from '@/app/enum/routes.enum'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <Link to={PageRoutes.SIGNIN}>Login</Link>
  )
}

export default Login