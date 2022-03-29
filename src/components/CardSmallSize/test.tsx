import { render, screen } from '@testing-library/react'

import CardSmallSize from '.'

describe('<CardSmallSize />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardSmallSize />)

    expect(screen.getByRole('heading', { name: /CardSmallSize/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
