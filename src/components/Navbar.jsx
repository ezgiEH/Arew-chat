import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Arew Chat</span>
      <div className='user'>
        <img src="https://avatars.githubusercontent.com/u/20560655?v=4" alt="ezgiEH" />
        <span>Ezgi</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar