import type { ReactNode } from 'react'

type ExperiencePeriodProps = {
  period: string
  children: ReactNode
}

export function ExperiencePeriod({ period, children }: ExperiencePeriodProps) {
  return (
    <div>
      <div className="glass-effect rounded-t-lg p-2">
        <p className="px-1 font-bold text-white/70 font-mono">{period}</p>
      </div>
      <div className="
        [&>*:last-child>div:last-child>div:last-child]:rounded-b-lg 
        [&>*:first-child>div:first-child]:rounded-tl-none
      ">
        {children}
      </div>
    </div>
  )
}
