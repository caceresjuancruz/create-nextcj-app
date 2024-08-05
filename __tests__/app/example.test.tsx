import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../../app/[lng]/page'

describe('Example', () => {
  const setup = () => render(<Page />)
  it('should render Nextcj', () => {
    setup()
    expect(screen.getByText('Nextcj')).toBeInTheDocument()
  })
})
