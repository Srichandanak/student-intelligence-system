import { createContext, useContext, useState } from 'react'

const ChatContext = createContext()

export function ChatProvider({ children }) {
  const [messages, setMessages] = useState([])

  const addMessage = message => {
    setMessages(prev => [...prev, message])
  }

  return (
    <ChatContext.Provider
      value={{
        messages,
        addMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  )
}

export function useChatContext() {
  return useContext(ChatContext)
}