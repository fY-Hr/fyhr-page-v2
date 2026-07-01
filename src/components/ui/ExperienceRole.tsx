import type { ReactNode } from 'react'

type ExperienceRoleProps = {
  title: string
  company: string
  children: ReactNode
}

export function ExperienceRole({ title, company, children }: ExperienceRoleProps) {
  return (
    <div>
      <div className="flex items-center bg-white/70 text-[#012182] p-2 rounded-bl-lg">
        <div className="h-2 w-3 rounded-full bg-[#012182]/50 animate-pulse" />
        <p className="border-l border-[#012182]/20 ml-2 px-4 font-bold font-mono">
          {title}
        </p>
        <p className="text-sm">at {company}</p>
      </div>
      <div className="glass-effect ml-7 px-3 py-2">
        <p className="font-mono text-sm text-white/60 italic pl-2 border-l-2 border-white/20">{children}</p>
      </div>
    </div>
  )
}
