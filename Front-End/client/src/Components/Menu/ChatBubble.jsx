import ChatBubble from './ChatBubble';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';


const Chat = () => {
 return (
    <div className="chat-container">
      <div className="messages">
        
          <ChatBubble/>
     
      </div>
      <form className="chat-form">
        <div className='flex flex-wrap justify-between items-center'>
        <input
          type="text"
          placeholder="Type a message..."
          className='bg-transparent focus:outline-none '
        />
        <button type="submit"><FontAwesomeIcon icon={faPaperPlane}/></button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
