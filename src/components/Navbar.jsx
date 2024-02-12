import { signOut } from 'firebase/auth'
import React from 'react'
import { auth } from '../firebase'


export const Navbar = () => {
  
  return (
    <div className='navbar'>
      <span className='logo'>ChatWave</span>
      <div className="user">
       <img src="https://images.pexels.com/photos/19686451/pexels-photo-19686451/free-photo-of-a-woman-in-white-standing-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
       <span>Jeet</span>
       <button onClick={()=>signOut(auth)}>Log Out</button>
      </div>
    </div>
  )
}
export default Navbar
