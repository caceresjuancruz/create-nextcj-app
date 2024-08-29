import { Typography } from '@/components/ui/typography'
import Api from '../form/Api'
import Array from '../form/Array'
import Basics from '../form/Basics'
import ConfirmPassword from '../form/ConfirmPassword'
import Controlled from '../form/Controlled'
import Dependencies from '../form/Dependencies'
import InputWithoutLabel from '../form/InputWithoutLabel'
import SubObject from '../form/SubObject'

const FormSection = () => {
  return (
    <div className='space-y-4'>
      <Typography variant='h3'>Form</Typography>
      <div className='flex flex-col gap-4 rounded-xl border p-8'>
        <Basics />
        <InputWithoutLabel />
        <SubObject />
        <Controlled />
        <ConfirmPassword />
        <Api />
        <Array />
        <Dependencies />
      </div>
    </div>
  )
}

export default FormSection
