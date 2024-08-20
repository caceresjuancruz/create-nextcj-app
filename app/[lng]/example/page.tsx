'use client'

import BadgeSection from '@/components/sections/BadgeSection'
import ButtonSection from '@/components/sections/ButtonSection'
import CardSection from '@/components/sections/CardSection'
import TypographySection from '@/components/sections/TypographySection'
import Searchbar from '@/components/ui/searchbar'
import { SearchParamsProps } from '@/types'
import { Suspense } from 'react'

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

      {/*-- FORM INPUTS --*/}
      {/* <div className='space-y-4'>
        <h1 className='h1'>Form Inputs</h1>
        <div className='space-y-4'>
          <CustomFormField
            fieldType={FormFieldType.SELECT}
            control={{} as Control<any>}
            name='ex'
            label='Select'
            placeholder='Select'
          >
            {['example1', 'example2', 'example3'].map((ex, i) => (
              <SelectItem key={i} value={ex}>
                <div className='flex cursor-pointer items-center gap-2'>
                  <p>{ex}</p>
                </div>
              </SelectItem>
            ))}
          </CustomFormField>

          <CustomFormField
            fieldType={FormFieldType.DATE_PICKER}
            control={{} as Control<any>}
            name='date'
            label='Date'
            showTimeSelect
            dateFormat='dd/MM/yyyy  -  h:mm aa'
          />

          <CustomFormField
            fieldType={FormFieldType.TEXTAREA}
            control={{} as Control<any>}
            name='textarea'
            label='Textarea'
            placeholder='Textarea'
          />
        </div>
      </div> */}

      <div className='p-12'>
        <Suspense>
          <Searchbar pill route='example' placeholder='Search...' lng={lng} />
        </Suspense>
      </div>
    </section>
  )
}
