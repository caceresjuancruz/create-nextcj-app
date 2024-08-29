'use client'

import { useTranslation } from '@/app/i18n/client'
import { Input } from '@/components/ui/input'
import { cn, formUrlQuery, removeKeysFromQuery } from '@/lib/utils'
import Search from '@geist-ui/icons/search'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

interface CustomSearchbarProps {
  route: string
  placeholder: string
  otherClasses?: string
  pill?: boolean
  lng: string
}

const Searchbar = ({
  route,
  placeholder,
  otherClasses,
  pill,
  lng
}: CustomSearchbarProps) => {
  const { t } = useTranslation(lng, 'translations')
  const router = useRouter()
  const path = usePathname()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  const [search, setSearch] = useState(query || '')

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (search) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: 'q',
          value: search
        })

        router.push(newUrl, { scroll: false })
      } else {
        if (path === `/${lng}/${route}`) {
          const newUrl = removeKeysFromQuery({
            params: searchParams.toString(),
            keysToRemove: ['q']
          })

          router.push(newUrl, { scroll: false })
        }
      }
    }, 300)

    return () => clearTimeout(delayDebounce)
  }, [search, route, path, router, searchParams, query, lng])

  const rounded = pill ? 'rounded-full' : 'rounded-md'
  return (
    <div
      className={cn(
        'flex h-12 grow items-center gap-1 border px-4',
        rounded,
        otherClasses
      )}
    >
      <Search size={20} strokeWidth={2.5} color='gray' />

      <Input
        type='text'
        placeholder={placeholder}
        value={search}
        onChange={e => setSearch(e.target.value)}
        className='no-focus placeholder border-none bg-transparent shadow-none outline-none'
      />
    </div>
  )
}

export default Searchbar
