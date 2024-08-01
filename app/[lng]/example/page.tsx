import { Button } from '@/components/ui/button'

export default function ExampleHome() {
  return (
    <section className='py-24'>
      <div className='container space-y-4'>
        <h1>Buttons</h1>
        <div className='space-y-4'>
          <p>Sizes</p>
          <div className='grid grid-cols-6 gap-4'>
            <Button size='xs'>Extra Small</Button>
            <Button size='sm'>Small</Button>
            <Button size='default'>Default</Button>
            <Button size='lg'>Large</Button>
            <Button size='icon'>Icon</Button>
          </div>

          <p>Variants</p>
          <div className='grid grid-cols-6 gap-4'>
            <Button variant='default'>Default</Button>
            <Button variant='secondary'>Secondary</Button>
            <Button variant='destructive'>Destructive</Button>
            <Button variant='outline'>Outline</Button>
            <Button variant='ghost'>Ghost</Button>
            <Button variant='link'>Link</Button>
          </div>

          <p>Effects</p>
          <div className='grid grid-cols-6 gap-4'>
            <Button hoverExpand>Hover Expand</Button>
            <Button heartbeat>Heartbeat</Button>
            <Button gradientColor='#2D8F29'>Gradient</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
