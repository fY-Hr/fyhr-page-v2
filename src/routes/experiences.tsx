import { createFileRoute } from '@tanstack/react-router'
import { GitBranch } from 'lucide-react'

export const Route = createFileRoute('/experiences')({
  component: ExperiencesPage,
})

function ExperiencesPage() {
  return (
    <div className="flex w-full flex-col gap-7 pb-8">
      <div className="p-1">
        <p className="text-5xl font-bold">Experiences</p>
        <p className="font-mono text-white/60 mt-1">Where i've been & what i've done</p>
      </div>

      <div className="glass-effect rounded-lg p-4">
        <p className="font-bold flex gap-2">
          A quick look at my path so far —{' '}
          <span className="font-semibold underline">roles, projects, and school</span>
          <GitBranch className="w-4" />
        </p>
        <p className="mt-2 border-l border-white/20 pl-4 text-sm text-white/70">
        </p>
      </div>
    </div>
  )
}
