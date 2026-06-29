import { Link } from '@tanstack/react-router'

interface NavButtonProps {
  children: React.ReactNode
  to: string
  className?: string
  onClick?: () => void
}

export function NavButton({ children, to, className = '', onClick }: NavButtonProps) {
  return (
    <Link 
      to={to}
      onClick={onClick}
      className={`rounded-lg cursor-pointer border border-transparent ring-1 ring-transparent duration-400 transition-all hover:glass-effect ${className}`}
      activeProps={{
        className: "bg-white/70 text-[#012182] border-white/20 ring-white/10 hover:text-white",
      }}
    >
      {children}
    </Link>
  )
}
