import type { ReactNode } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/sections/Footer'
import { useRouterState } from '@tanstack/react-router'

export function AppLayout({ children } : { children: ReactNode }) {


  const pathname = useRouterState({
    select: (state) => state.location.pathname
  })

  return (
    <div className="min-h-screen w-full overflow-x-hidden text-[#bac3dd] bg-[#012182]">
      <div className="sm:w-11/12 md:w-3/4 lg:w-1/2 mx-auto">
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full sm:w-full md:w-3/4 lg:w-1/2 px-4">
          <Navbar />
        </header>
        <main className="w-full flex flex-col overflow-x-hidden pt-24 px-8 ">
          <div key={pathname} className="w-full animate-fade-in">
            {children}
          </div>
        </main>
        <hr className="my-7 mx-8 text-white/10" />
        <footer className="w-full px-8 pb-7">
          <Footer />
        </footer>
      </div>
    </div>
)
}
