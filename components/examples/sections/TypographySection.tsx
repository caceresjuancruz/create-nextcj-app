import { Typography } from '@/components/ui/typography'

const TypographySection = () => {
  return (
    <div className='space-y-4'>
      <Typography variant='h3'>Typography</Typography>
      <div className='flex flex-col gap-4 rounded-xl border p-8'>
        <Typography variant='h1'>Heading 1</Typography>
        <Typography variant='h2'>Heading 2</Typography>
        <Typography variant='h3'>Heading 3</Typography>
        <Typography variant='h4'>Heading 4</Typography>
        <Typography variant='h5'>Heading 5</Typography>
        <Typography variant='h6'>Heading 6</Typography>
        <Typography variant='body' as='div'>
          Body text
        </Typography>
        <Typography variant='bodysmall' as='div'>
          Body small
        </Typography>
        <Typography variant='small'>Small text</Typography>
        <Typography variant='blockquote'>Blockquote</Typography>
      </div>
    </div>
  )
}

export default TypographySection
