import React from 'react'
import SignUpForm from '../components/SignUpForm'
import { GoogleOAuthProvider } from '@react-oauth/google';

const secret: string = import.meta.env.VITE_GOOGLE_SECRET;

const Signup = () => {
  return (
    <div>
      <GoogleOAuthProvider clientId={secret}>
        <SignUpForm/>
        </GoogleOAuthProvider>
    </div>
  )
}

export default Signup