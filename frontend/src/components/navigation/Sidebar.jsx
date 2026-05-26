import {
  BookOpen,
  Brain,
  ChevronRight,
  FileText,
  Home,
  Layers3,
  MessageSquare,
  Search,
  Sparkles,
} from 'lucide-react'

const navItems = [
  {
    label: 'Workspace',
    icon: Home,
  },
  {
    label: 'AI Chat',
    icon: MessageSquare,
  },
  {
    label: 'Knowledge',
    icon: Brain,
  },
  {
    label: 'Documents',
    icon: FileText,
  },
  {
    label: 'Research',
    icon: BookOpen,
  },
  {
    label: 'Collections',
    icon: Layers3,
  },
]

function Sidebar() {
  return (
    <aside className="group relative flex w-[88px] flex-col border-r border-white/10 bg-black/30 backdrop-blur-2xl transition-all duration-500 hover:w-[270px]">
      
      <div className="flex h-20 items-center gap-4 border-b border-white/10 px-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-400 to-violet-500 shadow-[0_0_30px_rgba(59,130,246,0.35)]">
          <Sparkles className="h-6 w-6 text-black" />
        </div>

        <div className="hidden min-w-max flex-col group-hover:flex">
          <span className="font-serif text-lg tracking-wide text-white">
            AI OS
          </span>
          <span className="text-xs uppercase tracking-[0.25em] text-zinc-500">
            knowledge engine
          </span>
        </div>
      </div>

      {/* search */}
      <div className="px-4 py-5">
        <button className="flex h-14 w-full items-center gap-4 rounded-2xl border border-white/10 bg-white/5 px-4 transition-all duration-300 hover:bg-white/10">
          <Search className="h-5 w-5 text-zinc-400" />

          <span className="hidden text-sm text-zinc-300 group-hover:block">
            Search everything...
          </span>
        </button>
      </div>

      {/* navigation */}
      <nav className="flex flex-1 flex-col gap-2 px-4">
        {navItems.map((item) => {
          const Icon = item.icon

          return (
            <button
              key={item.label}
              className="group/item relative flex h-14 items-center gap-4 overflow-hidden rounded-2xl px-4 transition-all duration-300 hover:bg-white/10"
            >
              <div className="absolute inset-y-2 left-0 w-1 rounded-full bg-cyan-400 opacity-0 transition-all duration-300 group-hover/item:opacity-100" />

              <Icon className="h-5 w-5 shrink-0 text-zinc-400 transition-colors group-hover/item:text-white" />

              <span className="hidden whitespace-nowrap text-sm tracking-wide text-zinc-300 group-hover:block">
                {item.label}
              </span>

              <ChevronRight className="ml-auto hidden h-4 w-4 text-zinc-500 group-hover:block" />
            </button>
          )
        })}
      </nav>

      {/* bottom profile */}
      <div className="border-t border-white/10 p-4">
        <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
          <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-orange-300 to-pink-500" />

          <div className="hidden flex-col group-hover:flex">
            <span className="text-sm font-medium text-white">
              Developer
            </span>
            <span className="text-xs text-zinc-500">
              Cognitive Architect
            </span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar