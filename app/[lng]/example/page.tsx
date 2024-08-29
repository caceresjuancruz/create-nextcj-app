import BadgeSection from '@/components/examples/sections/BadgeSection'
import ButtonSection from '@/components/examples/sections/ButtonSection'
import FormSection from '@/components/examples/sections/FormSection'
import SearchSection from '@/components/examples/sections/SearchSection'
import SwitcherSection from '@/components/examples/sections/SwitcherSection'
import TypographySection from '@/components/examples/sections/TypographySection'
import { SearchParamsProps } from '@/types'

export default function ExampleHome({
  searchParams,
  params: { lng }
}: SearchParamsProps) {
  return (
    <section className='space-y-8 p-4 md:space-y-16 md:p-24'>
      <TypographySection />
      <ButtonSection />
      <BadgeSection />
      <SearchSection lng={lng} />
      <SwitcherSection />
      <FormSection />
    </section>
  )
}
