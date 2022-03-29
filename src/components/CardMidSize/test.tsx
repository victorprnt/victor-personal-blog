import { render, screen } from '@testing-library/react'

import CardMidSize from '.'

describe('<CardMidSize />', () => {
  it('should render the heading', () => {
    const { container } = render(<CardMidSize />)

    expect(screen.getByRole('heading', { name: /CardMidSize/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
