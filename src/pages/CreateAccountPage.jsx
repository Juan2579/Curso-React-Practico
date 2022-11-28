import React from 'react'
import { Background } from '../components/Background'
import { CreateAccountForm } from '../components/CreateAccountForm'
import { Profile } from '../containers/Profile'

export const CreateAccountPage = () => {
  return (
    <main className='w-full h-auto'>
      <Profile>
        <Background type={"profile"} />
        <CreateAccountForm />
      </Profile>
    </main>
  )
}
