import { useState } from 'react'

import { sendMessage } from '../../services/chatService'
import { useChatContext } from '../../context/ChatContext'

function ChatInput() {
  const [input, setInput] = useState('')

  const { addMessage } = useChatContext()

  const handleSend = async () => {
    if (!input.trim()) return

    addMessage({
      role: 'user',
      content: input,
    })

    const userMessage = input
    setInput('')

    const response = await sendMessage(userMessage)

    addMessage({
      role: 'assistant',
      content: response.answer,
    })
  }

  return (
    <div className="border-t border-slate-800 p-4">
      <div className="flex gap-2">
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Ask your AI OS anything..."
          className="flex-1 rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 outline-none"
        />

        <button
          onClick={handleSend}
          className="rounded-xl bg-blue-600 px-5 py-3 hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default ChatInput