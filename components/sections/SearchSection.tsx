import { Suspense } from 'react'
import Searchbar from '../ui/searchbar'
import { Typography } from '../ui/typography'

interface SearchSectionProps {
  lng: string
}

const SearchSection = ({ lng }: SearchSectionProps) => {
  return (
    <div className='space-y-4'>
      <Typography variant='h3'>Search</Typography>
      <div className='flex flex-col gap-4 rounded-xl border p-8'>
        <Suspense>
          <Searchbar pill route='example' placeholder='Search...' lng={lng} />
        </Suspense>
      </div>
    </div>
  )
}

export default SearchSection
