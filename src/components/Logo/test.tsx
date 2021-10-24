import { render, screen } from 'utils/test-utils'

import Logo from '.'

describe('<Logo />', () => {
  it('should render a normal size', () => {
    const { container } = render(<Logo />)
    expect(screen.getByRole('img')).toHaveAttribute('alt')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render a small size', () => {
    render(<Logo size="small" />)
    expect(screen.getByTestId('Wrapper')).toHaveStyle({
      width: '6rem'
    })
  })
  it('should render a normal size', () => {
    render(<Logo size="normal" />)
    expect(screen.getByTestId('Wrapper')).toHaveStyle({
      width: '8rem'
    })
  })
  it('should render a large size', () => {
    render(<Logo size="large" />)
    expect(screen.getByTestId('Wrapper')).toHaveStyle({
      width: '10rem'
    })
  })
  it('should render a FullWidth', () => {
    render(<Logo size="fullWidth" />)
    expect(screen.getByTestId('Wrapper')).toHaveStyle({
      width: '12rem'
    })
  })
})
