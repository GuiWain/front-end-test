import userEvent from '@testing-library/user-event'
import { render, screen, act } from 'utils/test-utils'

import Menu from '.'

const resizeWindow = (x: number, y: number) => {
  global.innerWidth = x
  global.innerHeight = y

  act(() => {
    global.dispatchEvent(new Event('resize'))
  })
}

describe('<Menu />', () => {
  it('should render the default Menu', () => {
    const { container } = render(<Menu />)

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument()
    expect(screen.getByText(/Sign Up/i)).toBeInTheDocument()

    expect(screen.queryByTestId('MenuIcon')).not.toBeVisible()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should open menu', () => {
    render(<Menu />)

    resizeWindow(500, 300)

    const menuButton = screen.getByTestId('MenuIcon')
    userEvent.click(menuButton)

    expect(screen.getByText('Sign In')).toBeVisible()
  })
})
