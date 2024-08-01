import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold'>
          Next TS Starter with Internationalization (i18n)
        </h1>
        <Link href='/example'>
          <Button gradientColor='#4e016c'>Examples</Button>
        </Link>
      </div>
    </section>
  )
}
