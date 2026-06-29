import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '../components/sections/Hero'
import { SocialLinks } from '../components/SocialLinks'
import { TechStack } from '../components/sections/TechStack'
export const Route = createFileRoute('/')({ component: Home })

function Home() {
  return (
    <div className="flex flex-col w-full gap-7">
      <Hero />
      <div className="flex flex-col gap-7">
        <div className="p-1">
          <p className="font-bold text-5xl">Muhammad Fakhry Haidar</p>
          <p className="font-mono">Fullstack Developer {'</>'}</p>
          <SocialLinks />
        </div>
        <div className="p-1">
          <div className="glass-effect w-full rounded-lg p-4">
            <p className="font-bold pb-2">I'm a <span className="font-semibold underline">developer</span> from Jakarta, Indonesia.</p>
            <p className="pl-4 border-l">
              I have almost <span className="font-semibold">2 YoE</span> as a <span className="font-semibold">developer</span>. Most of my work is <span className="font-semibold">web-based</span> app. I enjoy making stuff, experimenting, especially a project with friends.
              I have an interest on low-level stuff, but that's still progressing... ;)
            </p>
          </div>
          <hr className="my-7 text-white/10" />
          <TechStack />
        </div>
      </div>
    </div>
  )
}
