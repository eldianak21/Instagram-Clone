import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import ConversationList from '../components/ConversationList';
import MessageView from '../components/MessageView';

const MessagePage = () => {
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <div className="bg-gray-100 h-screen">
      <Navbar />
      <div className="flex">
        <ConversationList setSelectedConversation={setSelectedConversation} />
        <MessageView conversation={selectedConversation} />
      </div>
    </div>
  );
};

export default MessagePage;