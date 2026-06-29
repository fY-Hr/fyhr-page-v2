import { OCEAN_WAVE_BRAILLE_ART } from '../../unicode/oceanWaveArt'

export function Hero() {
  return (
    <section className="w-full px-4">
      <div className="w-full overflow-hidden text-[0.55rem] md:text-[0.80rem]">
          <pre
            aria-hidden
            className="unicode-wave-art inline-block min-w-full font-mono" 
          >
            <code>{OCEAN_WAVE_BRAILLE_ART}</code>
          </pre>
      </div>
    </section>
  )
}
