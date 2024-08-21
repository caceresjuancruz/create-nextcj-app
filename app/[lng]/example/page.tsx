'use client'

import BadgeSection from '@/components/sections/BadgeSection'
import ButtonSection from '@/components/sections/ButtonSection'
import CardSection from '@/components/sections/CardSection'
import FormSection from '@/components/sections/FormSection'
import SearchSection from '@/components/sections/SearchSection'
import TypographySection from '@/components/sections/TypographySection'
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
      <CardSection />
      <SearchSection lng={lng} />
      <FormSection lng={lng} />
    </section>
  )
}
