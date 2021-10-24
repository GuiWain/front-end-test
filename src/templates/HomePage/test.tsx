import { render } from 'utils/test-utils'

import HomePage from '.'

describe('<HomePage />', () => {
  it('should render the HomePage', () => {
    const { container } = render(<HomePage />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
