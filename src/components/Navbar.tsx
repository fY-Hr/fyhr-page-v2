import { Link, useRouterState } from '@tanstack/react-router'
import { Menu } from 'lucide-react'
import { PopUpMenu } from './ui/PopUpMenu'
import { useState, useRef, useEffect } from 'react'

export function Navbar() {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)
  const pathname = useRouterState({ select: (state) => state.location.pathname })
  const isIndex = pathname === '/'
  const popUpRef = useRef<HTMLDivElement>(null)

  const handleOutsideRefClick = (e: MouseEvent) => {
    if (popUpRef.current && !popUpRef.current.contains(e.target as Node)) {
      setIsPopUpOpen(false)
    }
  }

  const handleScroll = () => {
    setIsPopUpOpen(false)
  }

  const togglePopup = (): void => {
    setIsPopUpOpen(!isPopUpOpen)
  }

  useEffect(() => {
    window.addEventListener('click', handleOutsideRefClick)
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('click', handleOutsideRefClick)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div> 
      <div className="relative text-md font-bold text-white rounded-xl py-1 px-1 glass-effect flex justify-between items-center">
        <Link 
          to="/"
          className="rounded-lg cursor-pointer hover:bg-transparent hover:text-white duration-400 transition-all font-mono"
          activeProps={{
            className: "bg-white text-[#155dfc] border-white/20 ring-white/10",
          }}
        >
          <div className="glass-effect group inline-flex px-2 py-1 rounded-lg justify-center items-center cursor-pointer overflow-hidden transition-all duration-400 ease-out"> 
            <span className="shrink-0">fY</span>
            <span className={`
              max-w-13 inline-block overflow-hidden whitespace-nowrap 
              opacity-100 transition-[max-width,opacity]
              duration-400 ease-out
              ${!isIndex ? "group-hover:max-w-13 group-hover:opacity-100 md:max-w-0 md:opacity-0" : ""}`}
            >
              -Hr
            </span>
          </div>
        </Link>
      
        <div className="hidden rounded-lg gap-4 md:flex">
          <Link 
            to="/works"
            className="py-1 rounded-lg border border-transparent ring-1 ring-transparent px-2 hover:glass-effect hover:text-white duration-400" 
            activeProps={{
              className: "bg-white text-[#155dfc] border-white/20 ring-white/10 shadow-lg",
            }}
          >
            :: works
          </Link> 
          <Link 
            to="/experiences"
            className="py-1 rounded-lg border border-transparent ring-1 ring-transparent px-2 hover:glass-effect hover:text-white duration-400" 
            activeProps={{
              className: "bg-white text-[#155dfc] border-white/20 ring-white/10 shadow-lg",
            }}
          >
            :: experiences
          </Link>
        </div>
        <div className={`relative md:hidden`} ref={popUpRef}>
            <button 
              type="button" 
              onClick={togglePopup} 
              aria-expanded={isPopUpOpen} aria-label="Open menu" 
              className={`
                rounded-md py-1 px-2 border border-transparent ring-1 ring-transparent
                transition-all duration-400 block
                hover:glass-effect ${isPopUpOpen? 'glass-effect border-white/20 ring-white/10': ''} 
              `}
              >
              <Menu strokeWidth={3} className='block' />
            </button>
        </div>
      </div>
      <PopUpMenu 
        handleClick={() => setIsPopUpOpen(false)}
        className={`
          absolute top-full right-0 z-50 mt-2 w-36 p-2 glass-effect flex justify-center items-center
          transition-all duration-400 rounded-xl backdrop-blur-lg mr-5 text-white font-bold md:hidden
          ${isPopUpOpen
            ? 'pointer-events-auto translate-x-0 opacity-100'
            : 'pointer-events-none translate-x-2 opacity-0'}
        `}
      />
    </div>
  )
}
