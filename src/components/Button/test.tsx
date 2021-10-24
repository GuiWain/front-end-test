import { render, screen } from 'utils/test-utils'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

describe('<Button />', () => {
  it('should render Button by default', () => {
    const { container } = render(<Button>Click</Button>)

    const button = screen.getByRole('button', { name: /Click/i })
    expect(button).toHaveStyle({
      height: '3.6rem',
      padding: '0.9rem 4.4rem',
      background: '#E1E974 0% 0% no-repeat padding-box',
      'font-size': '1.4rem'
    })

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the small size', () => {
    render(<Button size="small">Click</Button>)

    const button = screen.getByRole('button', { name: /Click/i })
    expect(button).toHaveStyle({
      height: '2.8rem',
      padding: '0.6rem 4.4rem',
      'font-size': '1.2rem'
    })
  })

  it('should render the large size', () => {
    render(<Button size="large">Click</Button>)

    const button = screen.getByRole('button', { name: /Click/i })
    expect(button).toHaveStyle({
      height: '4.4rem',
      padding: '1.1rem 5.6rem',
      'font-size': '1.6rem'
    })
  })

  it('should render the huge size', () => {
    render(<Button size="huge">Click</Button>)

    const button = screen.getByRole('button', { name: /Click/i })
    expect(button).toHaveStyle({
      height: '5.2rem',
      padding: '1.4rem 5.6rem',
      'font-size': '1.8rem',
      'font-weight': '800'
    })
  })

  it('should render a bg transparent version', () => {
    render(<Button bg="transparent">Click</Button>)

    const button = screen.getByRole('button', { name: /Click/i })
    expect(button).toHaveStyle({
      background: 'transparent 0% 0% no-repeat padding-box',
      border: '0.2rem solid #510161'
    })
  })

  it('should render a bg gray version', () => {
    render(<Button bg="gray">Click</Button>)

    const button = screen.getByRole('button', { name: /Click/i })
    expect(button).toHaveStyle({
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      border: '0.1rem solid #CCC8C8'
    })
  })

  it('should render a bg info version', () => {
    render(<Button bg="info">Click</Button>)

    const button = screen.getByRole('button', { name: /Click/i })
    expect(button).toHaveStyle({
      background: '#3241A1 0% 0% no-repeat padding-box',
      border: 'none',
      color: '#FFFFFF'
    })
  })

  it('should render a bg success version', () => {
    render(<Button bg="success">Click</Button>)

    const button = screen.getByRole('button', { name: /Click/i })
    expect(button).toHaveStyle({
      background: '#00A03E 0% 0% no-repeat padding-box',
      border: 'none',
      color: '#FFFFFF'
    })
  })

  it('should render a bg error version', () => {
    render(<Button bg="error">Click</Button>)

    const button = screen.getByRole('button', { name: /Click/i })
    expect(button).toHaveStyle({
      background: '#ed3020 0% 0% no-repeat padding-box',
      border: 'none',
      color: '#FFFFFF'
    })
  })

  it('should render a bg warning version', () => {
    render(<Button bg="warning">Click</Button>)

    const button = screen.getByRole('button', { name: /Click/i })
    expect(button).toHaveStyle({
      background: '#e7b500 0% 0% no-repeat padding-box',
      border: 'none',
      color: '#FFFFFF'
    })
  })

  it('should render a border info version', () => {
    render(<Button border="info">Click</Button>)

    const button = screen.getByRole('button', { name: /Click/i })
    expect(button).toHaveStyle({
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      border: '0.2rem solid #3241A1',
      color: '#3241A1'
    })
  })

  it('should render a border success version', () => {
    render(<Button border="success">Click</Button>)

    const button = screen.getByRole('button', { name: /Click/i })
    expect(button).toHaveStyle({
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      border: '0.2rem solid #00A03E',
      color: '#00A03E'
    })
  })

  it('should render a border error version', () => {
    render(<Button border="error">Click</Button>)

    const button = screen.getByRole('button', { name: /Click/i })
    expect(button).toHaveStyle({
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      border: '0.2rem solid #ed3020',
      color: '#ed3020'
    })
  })

  it('should render a border warning version', () => {
    render(<Button border="warning">Click</Button>)

    const button = screen.getByRole('button', { name: /Click/i })
    expect(button).toHaveStyle({
      background: '#FFFFFF 0% 0% no-repeat padding-box',
      border: '0.2rem solid #e7b500',
      color: '#e7b500'
    })
  })

  it('should render a fullWidth version', () => {
    render(<Button fullWidth>Click</Button>)

    expect(screen.getByRole('button', { name: /Click/i })).toHaveStyle({
      width: '100%'
    })
  })

  it('should render an icon version', () => {
    render(<Button icon={<AddShoppingCart data-testid="icon" />}>Click</Button>)

    expect(screen.getByText(/Click/i)).toBeInTheDocument()
    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('should render a disabled Button', () => {
    render(<Button disabled>Click</Button>)

    const button = screen.getByRole('button', { name: /Click/i })
    expect(button).toHaveStyleRule('cursor', 'not-allowed', {
      modifier: ':disabled'
    })

    expect(button).toHaveStyle({
      background: '#D9D9D9 0% 0% no-repeat padding-box',
      border: 'none',
      color: '#9D9D9D'
    })
  })
})
