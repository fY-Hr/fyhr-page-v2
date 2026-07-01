import { createFileRoute } from '@tanstack/react-router'
import { FolderGit2 } from 'lucide-react'
import { ProjectCard } from '../components/ui/ProjectCard'

export const Route = createFileRoute('/works')({
  component: WorksPage,
})

function WorksPage() {
  return (
    <div className="flex w-full flex-col gap-7">
      <div className="p-1">
        <p className="text-5xl font-bold">Works</p>
        <blockquote className="mt-2 max-w-prose border-l-2 border-white/20 pl-4 font-mono text-sm italic text-white/60">
          Things I've built and experimented with —{' '}
          <FolderGit2 className="inline-block h-4 w-4 shrink-0 not-italic" />
        </blockquote>
      </div>

      <ProjectCard
        year="2026"
        title="Seeker"
        repoUrl="https://github.com/fY-Hr/seeker"
        tags={['Tauri', 'React', 'TypeScript', 'Vite', 'Tailwind CSS']}
      >
        A desktop productivity app focused on keyboard-driven task management. Built with{' '}
        <span className="font-semibold text-white/80">Tauri v2</span>, it supports task lists,
        sub-tasks, urgency levels — all navigable without leaving the keyboard.
      </ProjectCard>
      <ProjectCard
        year="2025"
        title="Seragam App"
        repoUrl="https://github.com/akshara-devs/seragam-app-v2"
        tags={['React', 'Laravel', 'Tailwind CSS']}
      >
        An order app for SPMB admission event at my school. This app is developed with InertiaJS
      </ProjectCard>
      <ProjectCard
        year="2024"
        title="Simple Pomodoro App"
        repoUrl="https://github.com/fY-Hr/simple-pomodoro-app"
        tags={['HTML', 'CSS', 'JavaScript']}
      >
        A simple pomodoro app that i built when i was learning HTML, CSS, and JavaScript.
      </ProjectCard>
    </div>
  )
}
