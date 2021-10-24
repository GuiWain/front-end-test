import { render } from 'utils/test-utils'

import GetServices from '.'

describe('<GetServices />', () => {
  it('should render the GetServices', () => {
    const { container } = render(<GetServices />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
