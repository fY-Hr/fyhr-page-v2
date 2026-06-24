import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="flex flex-col items-center gap-7">  
      <div>
        <img src="/bg.jpg" alt="logo" className="shadow-xl rounded-lg" />
      </div>
      <div className="w-full">
        <div className="font-bold text-5xl">Muhammad Fakhry Haidar</div>
        <div>Fullstack Developer</div>
      </div>
    </div>
  )
}
