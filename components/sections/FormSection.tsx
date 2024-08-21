'use client'
import Mail from '@geist-ui/icons/mail'
import { zodResolver } from '@hookform/resolvers/zod'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import CustomFormField, { FormFieldType } from '../form/CustomFormField'
import { Button } from '../ui/button'
import { Form } from '../ui/form'
import { SelectItem } from '../ui/select'
import { Typography } from '../ui/typography'

const ExampleFormValidation = z.object({
  example: z.string(),
  email: z.string().email('Email not valid'),
  phone: z
    .string()
    .refine(phone => /^\+\d{10,15}$/.test(phone), 'Phone number not valid'),
  date: z.coerce.date(),
  select: z.enum(['Option1', 'Option2', 'Other']),
  checkbox: z
    .boolean()
    .default(false)
    .refine(value => value === true, {
      message: 'You must agree to the terms'
    }),
  textarea: z.string().max(1000)
})

interface FormSectionProps {
  lng: string
}

const FormSection = ({ lng }: FormSectionProps) => {
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<z.infer<typeof ExampleFormValidation>>({
    resolver: zodResolver(ExampleFormValidation),
    defaultValues: {
      example: '',
      email: '',
      phone: '+12345678901',
      date: new Date(),
      select: 'Option1',
      checkbox: false,
      textarea: ''
    }
  })

  console.log(form.formState.errors)

  const onSubmit = async (values: z.infer<typeof ExampleFormValidation>) => {
    console.log(values)
    setIsLoading(true)

    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }

  return (
    <div className='space-y-4'>
      <Typography variant='h3'>Form</Typography>
      <div className='flex flex-col rounded-xl border p-8'>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            onError={errors => console.log(errors)}
            className='flex-1 space-y-4'
          >
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name='example'
              label='Example'
              placeholder='Example'
            />

            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name='email'
              label='Email'
              placeholder='example@gmail.com'
              icon={<Mail size={20} />}
            />

            {/* <CustomFormField
              fieldType={FormFieldType.PHONE_INPUT}
              control={form.control}
              name='phone'
              label='Phone'
              placeholder='(555) 123-4567'
            /> */}

            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name='select'
              label='Select'
              placeholder='Select'
            >
              {['Option1', 'Option2', 'Other'].map((ex, i) => (
                <SelectItem key={i} value={ex}>
                  <div className='flex cursor-pointer items-center gap-2'>
                    <p>{ex}</p>
                  </div>
                </SelectItem>
              ))}
            </CustomFormField>

            {/* <CustomFormField
              fieldType={FormFieldType.DATE_PICKER}
              control={form.control}
              name='date'
              label='Date'
              showTimeSelect
              dateFormat='dd/MM/yyyy  -  h:mm aa'
            /> */}

            <CustomFormField
              fieldType={FormFieldType.CHECKBOX}
              control={form.control}
              name='checkbox'
              label='Checkbox'
            />

            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name='textarea'
              label='Textarea'
              placeholder='Textarea'
            />

            <Button variant={'success'} loading={isLoading} type='submit'>
              Submit
            </Button>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default FormSection
