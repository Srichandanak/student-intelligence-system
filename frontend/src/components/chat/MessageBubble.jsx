function MessageBubble({ message }) {
  const isUser = message.role === 'user'

  return (
    <div
      className={`max-w-2xl rounded-2xl px-4 py-3 ${
        isUser
          ? 'ml-auto bg-blue-600'
          : 'bg-slate-800'
      }`}
    >
      {message.content}
    </div>
  )
}

export default MessageBubble