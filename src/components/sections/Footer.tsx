export function Footer() {
  return (
    <footer className="text-white/30 font-mono text-xs flex flex-col gap-1">
      <p> 
        Copyright (c) {new Date().getFullYear()} fY-Hr. All Rights Reserved.
      </p>
      <p className="flex gap-2">
        Website build with
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src="/react-icon.svg" title="React" alt="React logo" className="invert opacity-30 h-4 w-4 hover:opacity-70" />
        </a>
        <a href="https://tanstack.com/router/latest" target="_blank" rel="noreferrer">
          <img src="/tanstack-icon.svg" title="Tanstack Router" alt="TanStack Router logo" className="invert opacity-30 h-4 w-4 hover:opacity-70" />
        </a>
      </p>
    </footer>
  )
}
