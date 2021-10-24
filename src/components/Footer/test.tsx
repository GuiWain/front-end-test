import { render, screen } from 'utils/test-utils'

import Footer from '.'

describe('<Footer />', () => {
  it('should render the Footer', () => {
    const { container } = render(<Footer />)

    expect(screen.getByAltText(/ISO 9001-2015/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
