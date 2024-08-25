import React from 'react'
import Menu from '../Menu/Menu'
import Profiles from '../Menu/Profiles'
import Chat from '../Menu/Chat'
function Sidebar() {
  return (
    <div>
        <Menu/>
        <div className='mt-4'>
          <Profiles/>
        </div>
         <div className='mt-6'>
         <Chat/>
         </div>
    </div>
  )
}

export default Sidebar