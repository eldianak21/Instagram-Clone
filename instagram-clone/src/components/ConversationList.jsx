import React from 'react';

const conversations = [
  { id: 1, name: 'helina', lastMessage: ' girl, where have you been?', time: 'Now' },
  { id: 2, name: 'Saron Hailemicheal', lastMessage: 'Just saw it!!', time: '15 min ago' },
  { id: 3, name: 'Amanuel Tesfaye', lastMessage: 'Thank you!', time: '50 min ago' },
  { id: 4, name: 'Bethel', lastMessage: "That's great!", time: '2 hr ago' },
  { id: 5, name: 'Sem', lastMessage: 'Can I ask you something?', time: '3 hr ago' },
  { id: 6, name: 'Firdows Bedru', lastMessage: 'Meche nw mtmechiw', time: '4 hr ago' },
  { id: 7, name: 'Eyerusalem Kibru', lastMessage: "anwser the phone!", time: '10 hr ago' },
  { id: 8, name: 'Junid Mohammod', lastMessage: 'Can I call u know?', time: '23 hr ago' },
];

const ConversationList = ({ setSelectedConversation }) => {
  return (
    <div className="w-1/3 bg-white border-r border-gray-300 p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search Chat Here..."
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        {conversations.map(conversation => (
          <div
            key={conversation.id}
            onClick={() => setSelectedConversation(conversation)}
            className="flex justify-between items-center p-2 cursor-pointer hover:bg-gray-200 rounded-md"
          >
            <div>
              <h3 className="font-semibold">{conversation.name}</h3>
              <p className="text-gray-500 text-sm">{conversation.lastMessage}</p>
            </div>
            <span className="text-gray-400 text-sm">{conversation.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversationList;