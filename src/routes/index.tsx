import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="flex flex-col w-full gap-7">  
      <div className="flex flex-col gap-7 px-2">
        <div className="p-1">
          <div className="font-bold text-5xl">Muhammad Fakhry Haidar</div>
          <div className="font-mono">Fullstack Developer {'</>'}</div>
        </div>
        <div className="p-1">
          <div className="glass-effect w-full rounded-lg p-4 text-white">
            <p className="font-bold pb-2">I'm a <span className="font-semibold underline">developer</span> from Jakarta, Indonesia.</p>
            <p className="pl-4 border-l">I use Typescript for most of my work. I enjoy making stuff, especially with friends. I have an interest on low-level stuff, and that's still progressing... ;)</p>
          </div>
        </div>
      </div>
    </div>
  )
}
