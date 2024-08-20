import Github from '@geist-ui/icons/github'
import { Card } from '../ui/card'
import { Typography } from '../ui/typography'

const CardSection = () => {
  return (
    <div className='space-y-4'>
      <Typography variant='h3'>Card</Typography>
      <div className='flex flex-col gap-4 rounded-xl border p-8'>
        <Typography variant='h5'>Sizes</Typography>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-7'>
          <Card size='xs' title='Extra Small' description='Extra Small' />
          <Card size='sm' title='Small' description='Small' />
          <Card title='Default' description='Default' />
          <Card size='lg' title='Large' description='Large' />
          <Card icon={<Github size={36} />} title='Icon' />
        </div>

        <div className='space-y-4 border-t py-4'>
          <Typography variant='h5'>Variants</Typography>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-7'>
            <Card title='Default' />
            <Card title='Secondary' variant='secondary' />
            <Card title='Outline' variant='outline' />
          </div>
        </div>

        <div className='space-y-4 border-t py-4'>
          <Typography variant='h5'>Effects</Typography>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-7'>
            <Card variant='default' gradient title='Gradient' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardSection
