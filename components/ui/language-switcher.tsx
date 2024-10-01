'use client'

import { changeLng } from '@/actions/cookie/cookie-change-lng.action'
import { languages } from '@/app/i18n/settings'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from '@/components/ui/menubar'
import { Language } from '@/types'
import { Globe } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { Button } from './button'

const LanguageSwitcher = () => {
  const cookies = useCookies()
  const language = cookies[0]?.i18next
  const [lng, setLng] = useState<Language>(language)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    setLng(language as Language)
  }, [language])

  async function handleLanguageChange(lang: string) {
    setLng(lang as Language)
    await changeLng(lang as Language)
    const newPath = pathname.replace(/\/[a-z]{2}($|\/)/, `/${lang}$1`)
    router.replace(newPath)
  }

  return (
    <Menubar className='relative border-none bg-transparent shadow-none'>
      <MenubarMenu>
        <MenubarTrigger aria-label='Switch language' asChild>
          <Button size='icon' variant='outline'>
            <Globe className='size-[1.2rem]' />
          </Button>
        </MenubarTrigger>
        <MenubarContent className='absolute min-w-fit'>
          {languages.map(lang => (
            <MenubarItem
              aria-label={lang}
              key={lang}
              className={`cursor-pointer ${lng === lang ? 'text-success' : 'text-neutral-900 dark:text-white'}`}
              onClick={() => handleLanguageChange(lang)}
            >
              <p className={`w-full text-center uppercase`}>{lang}</p>
            </MenubarItem>
          ))}
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  )
}

export default LanguageSwitcher
