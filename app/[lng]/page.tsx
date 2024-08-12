'use client'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Copy from '@geist-ui/icons/copy'
import Check from '@geist-ui/icons/check'
import { useState } from 'react'

export default function Home() {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('npx create-nextcj-app')
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <section className='flex-center h-screen py-24'>
      <div className='absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]'></div>
      <div className='container'>
        <div className='flex-center h-[30rem] flex-col gap-12'>
          <div className='text-center'>
            <small className='bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-xs text-transparent'>
              Introducing ultimate Next.js essential starter template
            </small>
            <h1 className='bg-gradient-to-t from-neutral-400 to-neutral-950 bg-clip-text text-7xl font-extrabold text-transparent md:text-9xl'>
              Nextcj
            </h1>
          </div>
          <Link href='/example'>
            <Button size='lg' gradientColor='#63e' className='shadow-xl'>
              Examples
            </Button>
          </Link>

          <Button
            size='sm'
            variant='outline'
            pill
            className='border-neutral-500 bg-transparent hover:bg-transparent'
            onClick={handleCopy}
            icon={isCopied ? <Check size={20} /> : <Copy size={20} />}
          >
            npx create-nextcj-app
          </Button>
        </div>
      </div>
    </section>
  )
}
