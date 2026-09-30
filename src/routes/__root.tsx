import { Outlet, createRootRoute } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { AppLayout } from '../layouts/AppLayout'

import '../styles.css'

const DevTools = import.meta.env.DEV
  ? lazy(() => import('../components/DevTools'))
  : () => null

export const Route = createRootRoute({
  component: RootComponent,
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'fY-Hr — Muhammad Fakhry Haidar',
      },
    ],
  }),
})

function RootComponent() {
  return (
    <>
      <AppLayout>
        <Outlet />
      </AppLayout>
      <Suspense>
        <DevTools />
      </Suspense>
    </>
  )
}
