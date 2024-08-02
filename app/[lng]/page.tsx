import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]'></div>
      <div className='container'>
        <div className='flex-center h-[30rem] flex-col gap-12'>
          <div className='text-center'>
            <small className='bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-transparent'>
              Introducing ultimate Next.js starter template
            </small>
            <h1 className='hero bg-gradient-to-t from-neutral-400 to-neutral-950 bg-clip-text text-transparent'>
              Nextcj
            </h1>
          </div>
          <Link href='/example'>
            <Button size='lg' gradientColor='#63e' className='shadow-xl'>
              Examples
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
