import ChatInput from './ChatInput'
import MessageBubble from './MessageBubble'

import { useChatContext } from '../../context/ChatContext'

function ChatWindow() {
  const { messages } = useChatContext()

  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 space-y-4 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
      </div>

      <ChatInput />
    </div>
  )
}

export default ChatWindow