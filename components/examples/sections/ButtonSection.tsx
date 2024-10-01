import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import Github from '@geist-ui/icons/github'

const ButtonSection = () => {
  return (
    <div className='space-y-4'>
      <Typography variant='h3'>Button</Typography>
      <div className='flex flex-col gap-4 rounded-xl border p-8'>
        <Typography variant='h5'>Sizes</Typography>
        <div className='grid grid-cols-1 gap-12 lg:grid-cols-7'>
          <Button size='xs'>Extra Small</Button>
          <Button size='sm'>Small</Button>
          <Button size='default'>Default</Button>
          <Button size='lg'>Large</Button>
          <Button size='icon'>Icon</Button>
        </div>

        <div className='space-y-4 border-t py-4'>
          <Typography variant='h5'>Variants</Typography>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-7'>
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
        </div>

        <div className='space-y-4 border-t py-4'>
          <Typography variant='h5'>Effects</Typography>
          <div className='grid grid-cols-1 gap-12 lg:grid-cols-7'>
            <Button hoverExpand>Hover Expand</Button>
            <Button heartbeat>Heartbeat</Button>
            <Button color='#63e' gradient>
              Gradient
            </Button>
            <Button pill>Pill Button</Button>
            <Button loading>Loading</Button>
            <Button icon={<Github size={20} strokeWidth={2} />}>Icon</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ButtonSection
