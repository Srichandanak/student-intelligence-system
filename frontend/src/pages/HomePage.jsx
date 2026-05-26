import { Link } from "react-router-dom"

function HomePage() {
  return (
    <div className="space-y-8">

      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">
          Welcome back 👋
        </h1>
        <p className="text-slate-400 mt-2">
          Your knowledge system is ready.
        </p>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-3 gap-4">
        <Link className="rounded-xl bg-blue-600 p-4 hover:bg-blue-700">
          Upload PDF
        </Link>

        <Link className="rounded-xl bg-purple-600 p-4 hover:bg-purple-700">
          Ask AI
        </Link>

        <Link className="rounded-xl bg-emerald-600 p-4 hover:bg-emerald-700">
          New Research Session
        </Link>
      </div>

      {/* Recent Activity */}
      <div className="rounded-xl border border-slate-800 p-4">
        <h2 className="text-xl font-semibold mb-2">
          Recent Activity
        </h2>
        <p className="text-slate-400">
          No activity yet. Start by uploading a document.
        </p>
      </div>

    </div>
  )
}

export default HomePage