import {
  Bell,
  Command,
  MoonStar,
  Plus,
  Settings2,
} from 'lucide-react'

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-2xl">
      <div className="flex h-20 items-center justify-between px-8">
        {/* left */}
        <div className="flex items-center gap-5">
          <div>
            <h1 className="font-serif text-2xl tracking-wide text-white">
              Workspace
            </h1>

            <p className="mt-1 text-sm text-zinc-500">
              Build, think, connect, retrieve.
            </p>
          </div>
        </div>

        {/* center command */}
        <div className="hidden w-full max-w-2xl px-8 xl:block">
          <button className="group flex h-14 w-full items-center rounded-2xl border border-white/10 bg-white/[0.04] px-5 transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.07]">
            <Command className="h-5 w-5 text-zinc-500" />

            <span className="ml-4 text-sm tracking-wide text-zinc-500 transition-colors group-hover:text-zinc-300">
              Ask your knowledge base anything...
            </span>

            <div className="ml-auto rounded-lg border border-white/10 bg-black/40 px-2 py-1 text-xs text-zinc-500">
              ⌘ K
            </div>
          </button>
        </div>

        {/* right */}
        <div className="flex items-center gap-3">
          <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all hover:scale-105 hover:bg-white/[0.09]">
            <Plus className="h-5 w-5 text-zinc-300" />
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all hover:scale-105 hover:bg-white/[0.09]">
            <Bell className="h-5 w-5 text-zinc-300" />
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all hover:scale-105 hover:bg-white/[0.09]">
            <MoonStar className="h-5 w-5 text-zinc-300" />
          </button>

          <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] transition-all hover:scale-105 hover:bg-white/[0.09]">
            <Settings2 className="h-5 w-5 text-zinc-300" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar