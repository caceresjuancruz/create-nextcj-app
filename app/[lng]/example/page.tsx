'use client'
import { example } from '@/actions/example.action'
import CustomFormField, {
  FormFieldType
} from '@/components/form/CustomFormField'
import LocalSearchbar from '@/components/search/LocalSearchbar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { SelectItem } from '@/components/ui/select'
import { SearchParamsProps } from '@/types'
import Github from '@geist-ui/icons/github'
import { Suspense } from 'react'
import { Control } from 'react-hook-form'

export default function ExampleHome({
  searchParams,
  params: { lng }
}: SearchParamsProps) {
  return (
    <section className='py-24'>
      <div className='container space-y-24'>
        {/*-- BUTTONS --*/}
        <div className='space-y-4'>
          <h1 className='h1'>Buttons</h1>
          <div className='space-y-4'>
            <p className='title-description'>Sizes</p>
            <div className='grid grid-cols-7 gap-12'>
              <Button size='xs'>Extra Small</Button>
              <Button size='sm'>Small</Button>
              <Button size='default'>Default</Button>
              <Button size='lg'>Large</Button>
              <Button size='icon'>Icon</Button>
            </div>

            <p className='title-description'>Variants</p>
            <div className='grid grid-cols-7 gap-12'>
              <Button variant='default'>Default</Button>
              <Button variant='secondary'>Secondary</Button>
              <Button variant='destructive'>Destructive</Button>
              <Button variant='outline'>Outline</Button>
              <Button variant='ghost'>Ghost</Button>
              <Button variant='link'>Link</Button>
              <Button variant='warning'>Warning</Button>
              <Button variant='info'>Info</Button>
              <Button variant='success'>Success</Button>
            </div>

            <p className='title-description'>Effects</p>
            <div className='grid grid-cols-7 gap-12'>
              <Button hoverExpand>Hover Expand</Button>
              <Button heartbeat>Heartbeat</Button>
              <Button gradientColor='#63e'>Gradient</Button>
              <Button pill>Pill</Button>
              <Button loading>Loading</Button>
              <Button icon={<Github size={20} strokeWidth={2} />}>Icon</Button>
            </div>
          </div>
        </div>

        {/*-- BADGES --*/}
        <div className='space-y-4'>
          <h1 className='h1'>Badges</h1>
          <div className='space-y-4'>
            <p className='title-description'>Sizes</p>
            <div className='grid grid-cols-7 gap-12'>
              <Badge size='xs'>Extra Small</Badge>
              <Badge size='sm'>Small</Badge>
              <Badge size='default'>Default</Badge>
              <Badge size='lg'>Large</Badge>
            </div>

            <p className='title-description'>Variants</p>
            <div className='grid grid-cols-7 gap-12'>
              <Badge variant='default'>Default</Badge>
              <Badge variant='secondary'>Secondary</Badge>
              <Badge variant='destructive'>Destructive</Badge>
              <Badge variant='outline'>Outline</Badge>
              <Badge variant='warning'>Warning</Badge>
              <Badge variant='info'>Info</Badge>
              <Badge variant='success'>Success</Badge>
            </div>

            <p className='title-description'>Effects</p>
            <div className='grid grid-cols-7 gap-12'>
              <Badge gradientColor='#63e'>Gradient</Badge>
              <Badge bounce>Bounce</Badge>
            </div>
          </div>
        </div>

        {/*-- CARDS --*/}
        <div className='space-y-4'>
          <h1 className='h1'>Cards</h1>
          <div className='space-y-4'>
            <p className='title-description'>Sizes</p>
            <div className='grid grid-cols-7 gap-12'>
              <Card size='xs' title='Extra Small' description='Extra Small' />
              <Card size='sm' title='Small' description='Small' />
              <Card title='Default' description='Default' />
              <Card size='lg' title='Large' description='Large' />
              <Card icon={<Github size={36} />} title='Icon' />
            </div>

            <p className='title-description'>Variants</p>
            <div className='grid grid-cols-7 gap-12'>
              <Card title='Default' />
              <Card title='Secondary' variant='secondary' />
              <Card title='Outline' variant='outline' />
            </div>

            <p className='title-description'>Effects</p>
            <div className='grid grid-cols-7 gap-12'>
              <Card gradientColor='#63e' title='Gradient' />
            </div>
          </div>
        </div>
      </div>

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
          <LocalSearchbar route='example' placeholder='Search...' lng={lng} />
        </Suspense>
      </div>
    </section>
  )
}
