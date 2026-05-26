import Sidebar from '../components/navigation/Sidebar'
import Topbar from '../components/navigation/Navbar'

function AppLayout({ children }) {
  return (
    <div className="relative flex h-screen overflow-hidden bg-[#09090b] text-[#f4f4f5]">
      {/* ambient glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />
      </div>

      <Sidebar />

      <div className="relative flex flex-1 flex-col overflow-hidden">
        <Topbar />

        <main className="relative flex-1 overflow-y-auto bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03),transparent_40%)] px-8 py-6">
          <div className="mx-auto max-w-7xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}

export default AppLayout