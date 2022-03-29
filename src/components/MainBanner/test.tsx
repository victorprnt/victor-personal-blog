import { render, screen } from '@testing-library/react'

import MainBanner from '.'

describe('<MainBanner />', () => {
  it('should render the heading', () => {
    const { container } = render(<MainBanner />)

    expect(screen.getByRole('heading', { name: /MainBanner/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
