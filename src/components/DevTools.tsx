import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

export default function DevTools() {
  return (
    <TanStackDevtools
      config={{
        position: 'bottom-right',
      }}
      plugins={[
        {
          name: 'TanStack Router',
          render: <TanStackRouterDevtoolsPanel />,
        },
      ]}
    />
  )
}
