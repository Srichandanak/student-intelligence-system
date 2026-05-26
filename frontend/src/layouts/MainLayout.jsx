import Sidebar from '../components/layout/Sidebar'
import Navbar from '../components/layout/Navbar'

const MainLayout = ({ children }) => {
  return (
    <div className="flex bg-black min-h-screen">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Navbar />

        <main className="flex-1 bg-zinc-950 p-6 text-white overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout