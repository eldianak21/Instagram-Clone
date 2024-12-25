import React from 'react';

const MessageView = ({ conversation }) => {
  if (!conversation) {
    return (
      <div className="w-2/3 p-4 flex items-center justify-center">
        <p className="text-gray-600">Select a conversation to start chatting.</p>
      </div>
    );
  }

  const messages = [
    { id: 1, sender: 'You', text: 'Hello!', time: '10:00 AM' },
    { id: 2, sender: conversation.name, text: conversation.lastMessage, time: '10:01 AM' },
  ]; // Sample messages for the selected conversation

  return (
    <div className="w-2/3 p-4 bg-white">
      <h2 className="text-lg font-bold mb-4">{conversation.name}</h2>
      <div className="overflow-y-auto h-72 mb-4">
        {messages.map(message => (
          <div key={message.id} className={`mb-2 ${message.sender === 'You' ? 'text-right' : 'text-left'}`}>
            <div className={`inline-block p-2 rounded-lg ${message.sender === 'You' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
              <p>{message.text}</p>
            </div>
            <span className="text-xs text-gray-400 ml-1">{message.time}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Type a message..."
        className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default MessageView;