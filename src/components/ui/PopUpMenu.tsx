import { NavButton } from './NavButton'

interface PopUpMenuProps {
  className: string
  handleClick: () => void
}

export function PopUpMenu({ className, handleClick }: PopUpMenuProps) {
  return (
    <div className={className}>
      <ul className="flex flex-col flex-1 gap-2">
        <li>
          <NavButton to="/works" onClick={handleClick} className="block w-full py-1 px-2">
            :: works
          </NavButton>
        </li>
        <li>
          <NavButton to="/experiences" onClick={handleClick} className="block w-full py-1 px-2">
            :: experiences
          </NavButton>
        </li>
        <li>
          <NavButton to="/" onClick={handleClick} className="block w-full py-1 px-2">
            :: me
          </NavButton>
        </li>
      </ul>
    </div>
  )
}
