/* eslint-disable no-unused-vars */
import Calendar from '@geist-ui/icons/calendar'
import { E164Number } from 'libphonenumber-js/core'
import Image from 'next/image'
import ReactDatePicker from 'react-datepicker'
import { Control } from 'react-hook-form'
import PhoneInput from 'react-phone-number-input'

import { Checkbox } from '@components/ui/checkbox'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@components/ui/form'
import { Input } from '@components/ui/input'
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue
} from '@components/ui/select'
import { Textarea } from '@components/ui/textarea'

export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton'
}

interface CustomProps {
  control: Control<any>
  name: string
  label?: string
  placeholder?: string
  iconSrc?: string
  icon?: React.ReactNode
  iconAlt?: string
  disabled?: boolean
  dateFormat?: string
  showTimeSelect?: boolean
  children?: React.ReactNode
  renderSkeleton?: (field: any) => React.ReactNode
  fieldType: FormFieldType
}

const RenderInput = ({ field, props }: { field: any; props: CustomProps }) => {
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className='flex rounded-md border'>
          {props.iconSrc && !props.icon && (
            <Image
              src={props.iconSrc}
              height={24}
              width={24}
              alt={props.iconAlt || 'icon'}
              className='ml-2'
            />
          )}

          {props.icon && !props.iconSrc && (
            <div className='flex-center ml-2'>{props.icon}</div>
          )}
          <FormControl>
            <Input
              placeholder={props.placeholder}
              {...field}
              className='border-0'
            />
          </FormControl>
        </div>
      )
    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            placeholder={props.placeholder}
            {...field}
            className='focus-visible:ring-0 focus-visible:ring-offset-0'
            disabled={props.disabled}
          />
        </FormControl>
      )
    case FormFieldType.PHONE_INPUT:
      return (
        <FormControl>
          <PhoneInput
            defaultCountry='AR'
            placeholder={props.placeholder}
            international
            withCountryCallingCode
            value={field.value as E164Number | undefined}
            onChange={field.onChange}
            className='mt-2 h-11 rounded-md border px-3 text-sm'
          />
        </FormControl>
      )
    case FormFieldType.CHECKBOX:
      return (
        <FormControl>
          <div className='flex items-center gap-4'>
            <Checkbox
              id={props.name}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
            <label
              htmlFor={props.name}
              className='cursor-pointer text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70 md:leading-none'
            >
              {props.label}
            </label>
          </div>
        </FormControl>
      )
    case FormFieldType.DATE_PICKER:
      return (
        <div className='flex rounded-md border'>
          <Calendar size={24} className='ml-2' />
          <FormControl>
            <ReactDatePicker
              showTimeSelect={props.showTimeSelect ?? false}
              selected={field.value}
              onChange={(date: Date | null) => field.onChange(date)}
              timeInputLabel='Time:'
              dateFormat={props.dateFormat ?? 'dd/MM/yyyy'}
              wrapperClassName='overflow-hidden border-transparent w-full h-11 rounded-md px-3 outline-none'
            />
          </FormControl>
        </div>
      )
    case FormFieldType.SELECT:
      return (
        <FormControl>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger className='h-11 focus:ring-0 focus:ring-offset-0'>
                <SelectValue placeholder={props.placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent className=''>{props.children}</SelectContent>
          </Select>
        </FormControl>
      )
    case FormFieldType.SKELETON:
      return props.renderSkeleton ? props.renderSkeleton(field) : null
    default:
      return null
  }
}

const CustomFormField = (props: CustomProps) => {
  const { control, name, label } = props

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className='flex-1'>
          {props.fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel className='text-primary'>{label}</FormLabel>
          )}
          <RenderInput field={field} props={props} />

          <FormMessage className='text-error' />
        </FormItem>
      )}
    />
  )
}

export default CustomFormField
