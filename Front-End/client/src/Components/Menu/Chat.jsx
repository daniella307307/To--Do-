import { faEllipsis, faHandPeace } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ChatBubble from './ChatBubble'

function Chat() {
  return (
    <div>
        <div className='px-2 py-4 bg-gray-200 rounded-lg'>
           <div className='flex flex-wrap items-center justify-between'>
           <h1 className='text-2xl'>Michie <FontAwesomeIcon icon={faHandPeace} className='text-2xl text-yellow-600'/></h1>
           <FontAwesomeIcon icon={faEllipsis} className='bg-white rounded-full p-2' />
           </div>
           <div className='mt-10'>
            <ChatBubble/>
           </div>
        </div>
    </div>
  )
}

export default Chat