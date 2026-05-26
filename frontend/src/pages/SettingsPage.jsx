// src/pages/SettingsPage.jsx

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-8">
          Settings
        </h1>

        <div className="space-y-6">
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              Appearance
            </h2>

            <p className="text-zinc-400 mb-4">
              Customize theme and interface preferences.
            </p>

            <button className="bg-white text-black px-5 py-2 rounded-xl">
              Toggle Theme
            </button>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              AI Preferences
            </h2>

            <p className="text-zinc-400">
              Configure model behavior, memory, and response settings.
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6">
            <h2 className="text-xl font-semibold mb-3">
              Account
            </h2>

            <p className="text-zinc-400">
              Manage profile and authentication.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SettingsPage