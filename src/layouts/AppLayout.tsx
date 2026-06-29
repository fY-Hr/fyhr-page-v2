import type { ReactNode } from 'react'
import { Navbar } from '../components/Navbar'

export function AppLayout({ children } : { children: ReactNode }) {
  return (
    <div className="h-screen w-full overflow-x-hidden text-white/70 bg-[#012182]">
      <div className="sm:w-11/12 md:w-3/4 lg:w-1/2 mx-auto">
        <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full sm:w-full md:w-3/4 lg:w-1/2 px-4">
          <Navbar />
        </header>
        <main className="h-full w-full flex flex-col overflow-y-auto overflow-x-hidden pt-24 px-4 pb-4">
          <div className="w-full p-1">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
