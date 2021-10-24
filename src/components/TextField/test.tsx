import { render, screen, waitFor } from 'utils/test-utils'
import { Email } from '@styled-icons/material-outlined'
import userEvent from '@testing-library/user-event'

import TextField from '.'

describe('<TextField />', () => {
  it('Renders with Label', () => {
    render(<TextField type="email" label="Label" name="Label" />)

    expect(screen.getByLabelText('Label')).toBeInTheDocument()
  })

  it('Renders without Label', () => {
    render(<TextField type="text" />)

    expect(screen.queryByLabelText('Label')).not.toBeInTheDocument()
  })

  it('Renders with placeholder', () => {
    render(<TextField type="email" placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Renders with Icon', () => {
    render(<TextField type="email" icon={<Email data-testid="icon" />} />)

    expect(screen.getByTestId('icon')).toBeInTheDocument()
  })

  it('Renders with Icon on the right side', () => {
    render(
      <TextField
        type="email"
        icon={<Email data-testid="icon" />}
        iconPosition="right"
      />
    )

    expect(screen.getByTestId('icon').parentElement).toHaveStyle({ order: 1 })
  })

  it('Changes its value when typing', async () => {
    const onInputChange = jest.fn()
    render(
      <TextField
        onInputChange={onInputChange}
        label="TextField"
        name="TextField"
        type="text"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(onInputChange).toHaveBeenCalledTimes(text.length)
    })
    expect(onInputChange).toHaveBeenCalledWith(text)
  })

  it('Render with props getValue', async () => {
    const getValue = jest.fn()
    render(
      <TextField
        getValue={getValue}
        label="TextField"
        name="TextField"
        type="text"
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).toHaveValue(text)
      expect(getValue).toHaveBeenCalled()
    })
  })

  it('Does not changes its value when disabled', async () => {
    const onInputChange = jest.fn()
    render(
      <TextField
        type="text"
        onInputChange={onInputChange}
        label="TextField"
        name="TextField"
        disabled
      />
    )

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()

    const text = 'This is my new text'
    userEvent.type(input, text)

    await waitFor(() => {
      expect(input).not.toHaveValue(text)
    })
    expect(onInputChange).not.toHaveBeenCalled()
  })

  it('Renders with error', () => {
    const { container } = render(
      <TextField type="text" label="TextField" error="Error message" />
    )

    expect(screen.getByText('Error message')).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Is accessible by tab', () => {
    render(<TextField type="email" label="TextField" name="TextField" />)

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).toHaveFocus()
  })

  it('Is not accessible by tab when disabled', () => {
    render(
      <TextField type="email" label="TextField" name="TextField" disabled />
    )

    const input = screen.getByLabelText('TextField')
    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(input).not.toHaveFocus()
  })

  it('should be show/hidde password', () => {
    render(<TextField type="password" label="Password" name="TextField" />)

    const inputPassword = screen.getByLabelText(/Password/i)
    const password = 'atus123456'
    userEvent.type(inputPassword, password)

    userEvent.click(screen.getByTestId('eye-slash-icon'))
    expect(inputPassword).toHaveAttribute('type', 'text')

    userEvent.click(screen.getByTestId('eye-icon'))
    expect(inputPassword).toHaveAttribute('type', 'password')

    userEvent.click(screen.getByTestId('eye-slash-icon'))
    expect(inputPassword).toHaveAttribute('type', 'text')
  })

  it('should render valid email', () => {
    render(<TextField type="email" label="TextField" name="TextField" />)

    const input = screen.getByRole('textbox')

    const text = 'email@email.com.br'
    userEvent.type(input, text)

    expect(screen.getByText('Valid email')).toBeInTheDocument()
  })

  it('should render invalid email', () => {
    render(<TextField type="email" label="TextField" name="TextField" />)

    const input = screen.getByRole('textbox')

    const text = 'email.email.com'
    userEvent.type(input, text)

    expect(screen.getByText('Invalid email')).toBeInTheDocument()
  })

  it('should render default wrapper when email is undefined', async () => {
    render(<TextField type="email" label="TextField" name="TextField" />)

    const input = screen.getByLabelText('TextField')
    const text = 'email@email.com'

    userEvent.type(input, text)
    expect(screen.getByText('Valid email')).toBeInTheDocument()

    await waitFor(() => {
      userEvent.clear(input)
      expect(screen.queryByText('Valid email')).not.toBeInTheDocument()
    })
  })
})
