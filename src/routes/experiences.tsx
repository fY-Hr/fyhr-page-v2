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

      <ExperiencePeriod period="2025-2026">
        <ExperienceRole title="Junior Programmer" company="PT. Biggy Cemerlang">
          <ul className="list-disc pl-[0.5px]">
            <li>
              Developed enterprise applications on Joget DX using Java, JavaScript (jQuery), and platform extensions.</li>
            <li>
              Built a QR-based system for end-to-end production, warehouse, and delivery tracking.
            </li>
            <li>
              Developed a farm management platform for production, inventory, and operational reporting.
            </li>
            <li>
              Built a real-time Joget DX plugin using Java Beanshell.
            </li>
            <li>
              Collaborated with cross-functional stakeholders to analyze processes and deliver operational solutions.
            </li>
          </ul>
        </ExperienceRole>
      </ExperiencePeriod>
      <ExperiencePeriod period="2025">
        <ExperienceRole title="IT Intern" company="SMK Pangeran Wijaya Kusuma">
        <ul className="list-disc pl-[0.5px]">
          <li>
            Developed an application for the SPMB admission event. 
          </li>
          <li>
            This app significantly reduced service 
            time by improving information flow and accelerating order processing between departments while 
            the event was underway.
          </li>
        </ul>
        </ExperienceRole>
      </ExperiencePeriod>
      <ExperiencePeriod period="2024">
        <ExperienceRole title="Junior Assistant Programmer" company="PT. Biggy Cemerlang">
        <ul className="list-disc pl-[0.5px]">
          <li>
            Successfully transformed a previously manual psychological testing process into an app.
          </li>
          <li>
            Improving assessment efficiency, data management, and result processing while reducing manual administrative work.
          </li>
        </ul>
        </ExperienceRole>
      </ExperiencePeriod>
    </div>
  )
}
