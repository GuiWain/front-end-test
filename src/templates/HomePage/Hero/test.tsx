import { render, screen } from 'utils/test-utils'

import Hero from '.'

describe('<Hero />', () => {
  it('should render the Hero', () => {
    const { container } = render(<Hero />)

    expect(screen.getByAltText('Universe image')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
