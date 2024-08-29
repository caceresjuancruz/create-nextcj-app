import LanguageSwitcher from '@/components/ui/language-switcher'
import ThemeSwitcher from '@/components/ui/theme-switcher'
import { Typography } from '@/components/ui/typography'

const SwitcherSection = () => {
  return (
    <div className='space-y-4'>
      <Typography variant='h3'>Switcher</Typography>
      <div className='flex flex-col gap-4 rounded-xl border p-8'>
        <div className='grid grid-cols-1 place-items-center gap-8 lg:grid-cols-7'>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  )
}

export default SwitcherSection
