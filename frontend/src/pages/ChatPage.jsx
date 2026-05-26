// src/pages/ChatPage.jsx

const messages = [
  {
    role: 'user',
    text: 'Summarize this operating systems PDF.',
  },
  {
    role: 'ai',
    text: 'The document explains process scheduling, memory management, and synchronization mechanisms.',
  },
]

const ChatPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      
      {/* Header */}
      <div className="border-b border-zinc-800 px-6 py-4">
        <h1 className="text-2xl font-bold">
          AI Chat
        </h1>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-6">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`max-w-2xl p-4 rounded-2xl ${
              msg.role === 'user'
                ? 'bg-white text-black ml-auto'
                : 'bg-zinc-900 text-white'
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input */}
      <div className="border-t border-zinc-800 p-4">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Ask AI something..."
            className="flex-1 bg-zinc-900 border border-zinc-800 rounded-xl px-4 py-3 outline-none"
          />

          <button className="bg-white text-black px-6 rounded-xl font-medium">
            Send
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatPage