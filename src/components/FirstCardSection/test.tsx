import { render, screen } from '@testing-library/react'

import FirstCardSection from '.'

describe('<FirstCardSection />', () => {
  it('should render the heading', () => {
    const { container } = render(<FirstCardSection />)

    expect(screen.getByRole('heading', { name: /FirstCardSection/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
