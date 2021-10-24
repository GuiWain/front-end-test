import { render, screen } from 'utils/test-utils'

import NavBar from '.'

describe('<NavBar />', () => {
  it('should render the NavBar', () => {
    const { container } = render(<NavBar />)

    expect(screen.getAllByText(/Link/i)).toHaveLength(6)
    expect(container.firstChild).toMatchSnapshot()
  })
})
