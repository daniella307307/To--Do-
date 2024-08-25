import React from 'react'
import Menu from '../Menu/Menu'
import Profiles from '../Menu/Profiles'
function Sidebar() {
  return (
    <div>
        <Menu/>
        <div className='mt-4'>
          <Profiles/>
        </div>
    </div>
  )
}

export default Sidebar