// src/pages/DashboardPage.jsx

const DashboardPage = () => {
  const cards = [
    {
      title: 'PDFs Uploaded',
      value: '12',
    },
    {
      title: 'AI Chats',
      value: '48',
    },
    {
      title: 'Knowledge Nodes',
      value: '326',
    },
    {
      title: 'Tasks Completed',
      value: '19',
    },
  ]

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="mb-10">
        <h1 className="text-4xl font-bold mb-2">
          Dashboard
        </h1>

        <p className="text-zinc-400">
          Your AI command center.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.title}
            className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6"
          >
            <p className="text-zinc-400 text-sm mb-3">
              {card.title}
            </p>

            <h2 className="text-4xl font-bold">
              {card.value}
            </h2>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DashboardPage