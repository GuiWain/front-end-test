import { render, screen } from 'utils/test-utils'

import Base from '.'

jest.mock('components/Menu', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Menu">{children}</div>
  }
}))

jest.mock('components/Footer', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Footer">{children}</div>
  }
}))

describe('<Base />', () => {
  it('should render the Base', () => {
    const { container } = render(
      <Base>
        <div>
          <h1>Heading</h1>
        </div>
      </Base>
    )

    expect(screen.getByText('Heading')).toBeInTheDocument()
    expect(screen.getByTestId(/Mock Menu/i)).toBeInTheDocument()
    expect(screen.getByTestId(/Mock Footer/i)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
