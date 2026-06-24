import { Link } from "@tanstack/react-router"

interface PopUpMenuProps {
  className: string
  handleClick: () => void
}

export function PopUpMenu({className, handleClick}: PopUpMenuProps) {
  return (
    <div className={className}>
      <ul className="flex flex-col flex-1 gap-2">
        <li>
          <Link
            onClick={handleClick} 
            to="/works"
            className="py-1 rounded-lg border border-transparent ring-1 ring-transparent px-2 hover:glass-effect duration-400 w-full block" 
            activeProps={{
              className: "bg-white text-[#155dfc] border-white/20 ring-white/10 shadow-lg",
            }}
          >
            :: works
          </Link> 
        </li>
        <li>
          <Link 
            onClick={handleClick}
            to="/experiences"
            className="py-1 rounded-lg border border-transparent ring-1 ring-transparent px-2 hover:glass-effect duration-400 w-full block" 
            activeProps={{
              className: "bg-white text-[#155dfc] border-white/20 ring-white/10 shadow-lg",
            }}
          >
            :: experiences
          </Link>
        </li>
        <li>
          <Link
            onClick={handleClick} 
            to="/"
            className="py-1 rounded-lg border border-transparent ring-1 ring-transparent px-2 hover:glass-effect duration-400 w-full block" 
            activeProps={{
              className: "bg-white text-[#155dfc] border-white/20 ring-white/10",
            }}
          >
            :: me
          </Link>
        </li>
      </ul>
    </div>
  )
}
