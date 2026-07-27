import { createFileRoute } from '@tanstack/react-router'
import { GitBranch } from 'lucide-react'
import { ExperiencePeriod } from '../components/ui/ExperiencePeriod'
import { ExperienceRole } from '../components/ui/ExperienceRole'

export const Route = createFileRoute('/experiences')({
  component: ExperiencesPage,
  head: () => ({
    links: [
      {
        rel: 'canonical',
        href: 'https://fyhr.site/experiences',
      },
    ],
    meta: [
      {
        title: 'Experiences | fY-Hr',
      },
      {
        name: 'description',
        content: "Professional experience and career journey of Muhammad Fakhry Haidar.",
      },
      {
        property: 'og:title',
        content: 'Experiences | fY-Hr',
      },
      {
        property: 'og:description',
        content: 'Professional experience and career journey of Muhammad Fakhry Haidar.',
      },
      {
        property: 'og:url',
        content: 'https://fyhr.site/experiences',
      },
      {
        name: 'twitter:title',
        content: 'Experiences | fY-Hr',
      },
      {
        name: 'twitter:description',
        content: 'Professional experience and career journey of Muhammad Fakhry Haidar.',
      },
    ],
  }),
})

function ExperiencesPage() {
  return (
    <div className="flex w-full flex-col gap-7">
      <div className="p-1">
        <h1 className="text-5xl font-bold">Experiences</h1>
        <blockquote className="mt-2 max-w-prose border-l-2 border-white/20 pl-4 font-mono text-sm italic text-white/60">
          My professional experiences and growths —{' '}
          <GitBranch className="inline-block h-4 w-4 shrink-0 not-italic" />
        </blockquote>
      </div>

      <ExperiencePeriod period="PRESENT">
        <ExperienceRole title="Junior Programmer" company="PT. Biggy Cemerlang">
          Developing custom applications for the company on top of{' '}
          <a
            href="https://joget.com/platform/platform/joget-dx/"
            target="_blank"
            className="hover:underline font-semibold underline sm:no-underline"
          >
            Joget DX
          </a>
        </ExperienceRole>
      </ExperiencePeriod>
      <ExperiencePeriod period="2025">
        <ExperienceRole title="IT Intern" company="SMK Pangeran Wijaya Kusuma">
          Developed an application for the SPMB admission event. This app significantly reduced service 
          time by improving information flow and accelerating order processing between departments while 
          the event was underway.
        </ExperienceRole>
      </ExperiencePeriod>
      <ExperiencePeriod period="2024">
        <ExperienceRole title="Junior Assistant Programmer" company="PT. Biggy Cemerlang">
          Successfully transformed a previously manual psychological testing process into an app.
          Improving assessment efficiency, data management, and result processing while reducing manual administrative work.
        </ExperienceRole>
      </ExperiencePeriod>
    </div>
  )
}
