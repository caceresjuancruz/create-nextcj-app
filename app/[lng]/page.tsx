'use client'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import Check from '@geist-ui/icons/check'
import Copy from '@geist-ui/icons/copy'
import GitHub from '@geist-ui/icons/github'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [isCopied, setIsCopied] = useState(false)
  const handleCopy = () => {
    navigator.clipboard.writeText('npx create-nextcj-app')
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <section className='flex-center h-[100dvh] flex-col gap-20 text-center'>
      <Link
        href='https://github.com/caceresjuancruz/create-nextcj-app'
        target='_blank'
        className='absolute right-4 top-4'
        passHref
      >
        <Button
          size='xs'
          variant='link'
          icon={<GitHub size={20} />}
          className='font-light'
        >
          Star on GitHub
        </Button>
      </Link>
      <Typography
        variant='small'
        className='bg-gradient-to-b from-neutral-200 to-neutral-600 bg-clip-text text-transparent'
      >
        Introducing ultimate essential Next.js starter template
      </Typography>
      <h1 className='bg-gradient-to-t from-neutral-400 to-neutral-950 bg-clip-text text-7xl font-thin tracking-widest text-transparent md:text-9xl'>
        Nextcj
      </h1>

      <div className='flex flex-col gap-8'>
        <Link href='/example' passHref className='mx-auto w-fit rounded-lg'>
          <Button size='default' hoverExpand gradient className='shadow-xl'>
            Examples
          </Button>
        </Link>

        <Button
          size='xs'
          variant='outline'
          pill
          className='border-neutral-500 bg-transparent hover:bg-transparent'
          onClick={handleCopy}
          icon={isCopied ? <Check size={16} /> : <Copy size={16} />}
        >
          npx create-nextcj-app
        </Button>
      </div>
    </section>
  )
}
