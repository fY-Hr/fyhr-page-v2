import { useMediaQuery } from '../../hooks/useMediaQuery'

const stacks = [
  { name: 'Typescript', icon: '/typescript-icon.svg' },
  { name: 'React', icon: '/react-icon.svg' },
  { name: 'Tanstack', icon: '/tanstack-icon.svg' },
  { name: 'TailwindCSS', icon: 'tailwindcss-icon.svg' },
  { name: 'Laravel', icon: '/laravel-icon.svg' },
  { name: 'Git', icon: '/git-icon.svg' },
  { name: 'Linux', icon: '/linux-icon.svg' },
  { name: 'Obsidian', icon: '/obsidian-icon.svg' },
  { name: 'Neovim', icon: '/neovim-icon.svg' },
  { name: 'Cursor', icon: '/cursor-icon.svg'},
] as const

const gridCols = {
  4: 'grid-cols-4',
  6: 'grid-cols-6',
} as const

const colSpan = {
  2: 'col-span-2',
  3: 'col-span-3',
  4: 'col-span-4',
  6: 'col-span-6',
} as const

function checkIfFit(cols: number) {
  const remainder = stacks.length % cols
  return remainder === 0 ? cols : (cols - remainder == 1 ? cols : cols-remainder)

}

export function TechStack() {
  const cols = useMediaQuery('(min-width: 640px)') ? 6 : 4
  const span = checkIfFit(cols)

  return (
    <section className="flex flex-col gap-4">
      <p className="w-fit text-xl font-bold flex gap-1 cursor-default">
        # Things that i love to use :)
      </p>

      <ul className={`grid gap-3 ${gridCols[cols]}`}>
        {stacks.map(({ name, icon }) => (
          <li key={name}>
            <div className="glass-effect flex flex-col items-center gap-2 rounded-lg p-1 py-2 transition-all duration-400 group">
              <img
                src={icon}
                alt=""
                title={name}
                className="h-6 w-6 invert opacity-70 transition-all duration-200 group-hover:opacity-100 group-hover:rotate-6"
              />
            </div>
          </li>
        ))}
        <li className={`${colSpan[span]} text-center`}>
          <div className="bg-[#bac3dd] text-[#012182] font-semibold whitespace-nowrap overflow-hidden flex flex-col items-center gap-2 rounded-lg p-1 py-2 transition-all duration-400 group">
            And learning more...
          </div>
        </li>
      </ul>
    </section>
  )
}
