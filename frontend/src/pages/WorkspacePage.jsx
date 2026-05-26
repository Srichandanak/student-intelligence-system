// src/pages/WorkspacePage.jsx

import {
  ArrowUpRight,
  BrainCircuit,
  Clock3,
  FileText,
  Sparkles,
  Bot,
  Network,
  Database,
  WandSparkles,
} from 'lucide-react'

function WorkspacePage() {
  return (
    <div className="space-y-8">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.03] p-10 backdrop-blur-2xl">
        {/* ambient glows */}
        <div className="absolute -left-10 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />

        <div className="relative z-10 max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm tracking-wide text-cyan-300">
            <Sparkles className="h-4 w-4" />
            AI cognition layer active
          </div>

          <h1 className="max-w-4xl font-serif text-6xl leading-[1.05] tracking-tight text-white xl:text-7xl">
            Your academic
            <span className="bg-gradient-to-r from-cyan-300 via-white to-violet-300 bg-clip-text text-transparent">
              {' '}
              operating system.
            </span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-relaxed text-zinc-400">
            Connect lectures, PDFs, notes, AI conversations,
            research papers, semantic search, and long-term memory
            into one evolving intelligence layer.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button className="group flex h-14 items-center gap-3 rounded-2xl bg-white px-7 text-sm font-semibold text-black transition-all duration-300 hover:scale-[1.02]">
              Open Workspace

              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </button>

            <button className="h-14 rounded-2xl border border-white/10 bg-white/[0.04] px-7 text-sm text-zinc-300 transition-all duration-300 hover:bg-white/[0.08]">
              Explore Knowledge Graph
            </button>
          </div>
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: 'Knowledge Chunks',
            value: '1,284',
            icon: Database,
            color: 'cyan',
          },
          {
            title: 'AI Conversations',
            value: '342',
            icon: Bot,
            color: 'violet',
          },
          {
            title: 'Documents Indexed',
            value: '89',
            icon: FileText,
            color: 'orange',
          },
          {
            title: 'Graph Connections',
            value: '12.4k',
            icon: Network,
            color: 'emerald',
          },
        ].map((item) => {
          const Icon = item.icon

          return (
            <div
              key={item.title}
              className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 hover:bg-white/[0.05]"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent" />
              </div>

              <div
                className={`
                  flex h-14 w-14 items-center justify-center rounded-2xl
                  ${
                    item.color === 'cyan'
                      ? 'bg-cyan-500/10 text-cyan-300'
                      : ''
                  }
                  ${
                    item.color === 'violet'
                      ? 'bg-violet-500/10 text-violet-300'
                      : ''
                  }
                  ${
                    item.color === 'orange'
                      ? 'bg-orange-500/10 text-orange-300'
                      : ''
                  }
                  ${
                    item.color === 'emerald'
                      ? 'bg-emerald-500/10 text-emerald-300'
                      : ''
                  }
                `}
              >
                <Icon className="h-6 w-6" />
              </div>

              <div className="relative z-10 mt-6">
                <h3 className="text-sm uppercase tracking-[0.25em] text-zinc-500">
                  {item.title}
                </h3>

                <p className="mt-3 font-serif text-5xl text-white">
                  {item.value}
                </p>
              </div>
            </div>
          )
        })}
      </section>

      {/* FEATURE GRID */}
      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        {/* LEFT PANEL */}
        <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-serif text-4xl text-white">
                Recent Knowledge
              </h2>

              <p className="mt-2 text-zinc-500">
                Your latest connected thoughts and documents.
              </p>
            </div>

            <button className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm text-zinc-300 transition-all duration-300 hover:bg-white/[0.08]">
              View All
            </button>
          </div>

          <div className="mt-8 space-y-4">
            {[
              {
                title: 'Distributed Systems Notes',
                desc: 'CAP theorem, vector clocks, replication strategies, eventual consistency.',
              },
              {
                title: 'RAG Pipeline Research',
                desc: 'Chunking, embeddings, retrieval orchestration, hybrid search systems.',
              },
              {
                title: 'Operating Systems Lecture',
                desc: 'Scheduling algorithms, memory management, paging, concurrency.',
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group rounded-3xl border border-white/10 bg-black/20 p-6 transition-all duration-500 hover:border-cyan-500/20 hover:bg-white/[0.03]"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <h3 className="text-xl font-medium text-white">
                      {card.title}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-relaxed text-zinc-500">
                      {card.desc}
                    </p>
                  </div>

                  <ArrowUpRight className="h-5 w-5 shrink-0 text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="space-y-6">
          {/* AI STATE */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                <WandSparkles className="h-6 w-6" />
              </div>

              <div>
                <h2 className="font-serif text-3xl text-white">
                  AI Context
                </h2>

                <p className="text-zinc-500">
                  Persistent cognitive memory
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-5">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                  ACTIVE MODEL
                </span>

                <h3 className="mt-3 text-xl text-white">
                  Academic Reasoning Engine
                </h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                  VECTOR DATABASE
                </span>

                <h3 className="mt-3 text-xl text-white">
                  pgvector semantic memory
                </h3>
              </div>

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <span className="text-xs uppercase tracking-[0.3em] text-zinc-600">
                  RETRIEVAL LATENCY
                </span>

                <h3 className="mt-3 text-xl text-white">
                  182ms semantic recall
                </h3>
              </div>
            </div>
          </div>

          {/* ACTIVITY */}
          <div className="rounded-[32px] border border-white/10 bg-white/[0.03] p-7">
            <h2 className="font-serif text-3xl text-white">
              Live Activity
            </h2>

            <div className="mt-8 space-y-5">
              {[
                'Embedding pipeline completed',
                '3 new PDFs indexed',
                'Knowledge graph updated',
                'AI memory synchronization complete',
              ].map((activity) => (
                <div
                  key={activity}
                  className="flex items-center gap-4"
                >
                  <div className="h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />

                  <p className="text-zinc-400">
                    {activity}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOWER FEATURE CARDS */}
      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-7">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-300">
            <BrainCircuit className="h-6 w-6" />
          </div>

          <h3 className="mt-6 font-serif text-3xl text-white">
            Semantic Retrieval
          </h3>

          <p className="mt-4 leading-relaxed text-zinc-400">
            AI-powered search that understands meaning instead of
            keywords.
          </p>
        </div>

        <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-violet-500/10 to-transparent p-7">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
            <FileText className="h-6 w-6" />
          </div>

          <h3 className="mt-6 font-serif text-3xl text-white">
            Intelligent Documents
          </h3>

          <p className="mt-4 leading-relaxed text-zinc-400">
            PDFs become living knowledge nodes connected through AI.
          </p>
        </div>

        <div className="rounded-[30px] border border-white/10 bg-gradient-to-br from-orange-500/10 to-transparent p-7">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-300">
            <Clock3 className="h-6 w-6" />
          </div>

          <h3 className="mt-6 font-serif text-3xl text-white">
            Persistent Memory
          </h3>

          <p className="mt-4 leading-relaxed text-zinc-400">
            Conversations evolve into reusable academic intelligence.
          </p>
        </div>
      </section>
    </div>
  )
}

export default WorkspacePage