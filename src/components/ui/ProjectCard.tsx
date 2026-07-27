import type { ReactNode } from 'react'

type ProjectCardProps = {
  year: string
  title: string
  repoUrl: string
  tags: string[]
  children: ReactNode
}

export function ProjectCard({ year, title, repoUrl, tags, children }: ProjectCardProps) {
  return (
    <article>
      <div className="glass-effect rounded-t-lg p-2">
        <p className="px-1 font-bold text-white/70 font-mono">{year}</p>
      </div>
      <div className="flex items-center justify-between bg-white/70 text-[#012182] p-2">
        <div className="flex items-center">
          <div className="h-2 w-3 rounded-full bg-[#012182]/50" />
          <p className="border-l border-[#012182]/20 ml-2 px-4 font-bold font-mono">
            {title}
          </p>
        </div>
        <a
          href={repoUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-1.5 px-2 text-sm font-mono hover:underline"
        >
          <img src="/github-icon.svg" alt="GitHub icon" className="h-4 w-4" />
          source
        </a>
      </div>
      <div className="glass-effect rounded-b-lg px-3 py-3">
        <p className="border-l-2 border-white/20 pl-2 font-mono text-sm italic text-white/60">
          {children}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5 pl-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-white/20 bg-white/10 px-2 py-0.5 font-mono text-xs text-white/60"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
