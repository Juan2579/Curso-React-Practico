import React from 'react'
import { Background } from '../components/Background'
import { LoginForm } from '../components/LoginForm'
import { Profile } from '../containers/Profile'

export const LoginPage = () => {
  return (
    <main className='w-full h-auto'>
      <Profile>
        <Background type={"profile"} />
        <LoginForm />
      </Profile>
    </main>
  )
}
