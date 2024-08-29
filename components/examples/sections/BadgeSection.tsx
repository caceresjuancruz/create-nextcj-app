import { Typography } from '@/components/ui/typography'
import { Badge } from '@components/ui/badge'

const BadgeSection = () => {
  return (
    <div className='space-y-4'>
      <Typography variant='h3'>Badge</Typography>
      <div className='flex flex-col gap-4 rounded-xl border p-8'>
        <Typography variant='h5'>Sizes</Typography>
        <div className='grid grid-cols-1 gap-12 sm:grid-cols-7'>
          <Badge size='xs'>Extra Small</Badge>
          <Badge size='sm'>Small</Badge>
          <Badge size='default'>Default</Badge>
          <Badge size='lg'>Large</Badge>
        </div>

        <div className='space-y-4 border-t py-4'>
          <Typography variant='h5'>Variants</Typography>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-7'>
            <Badge variant='default'>Default</Badge>
            <Badge variant='secondary'>Secondary</Badge>
            <Badge variant='destructive'>Destructive</Badge>
            <Badge variant='outline'>Outline</Badge>
            <Badge variant='warning'>Warning</Badge>
            <Badge variant='info'>Info</Badge>
            <Badge variant='success'>Success</Badge>
          </div>
        </div>

        <div className='space-y-4 border-t py-4'>
          <Typography variant='h5'>Effects</Typography>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-7'>
            <Badge gradient>Gradient</Badge>
            <Badge bounce>Bounce</Badge>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BadgeSection
