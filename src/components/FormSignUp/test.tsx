import { fireEvent, render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'
import FormSignUp from '.'

describe('<FormSignUp />', () => {
  it('should render the FormSignUp', () => {
    const handleSubmit = jest.fn()
    const fieldError = {}
    const { container } = render(
      <FormSignUp handleSubmit={handleSubmit} fieldError={fieldError} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be prevent paste text in confirm password', () => {
    const handleSubmit = jest.fn()
    const fieldError = {}
    render(<FormSignUp handleSubmit={handleSubmit} fieldError={fieldError} />)

    const inputPasswordConfirm = screen.getByLabelText(/Confirm password/i)
    const passwordConfirm = 'password12345'
    userEvent.paste(inputPasswordConfirm, passwordConfirm)

    expect(inputPasswordConfirm).toHaveValue()
  })

  it('should be submit form with sucess', () => {
    const handleSubmit = jest.fn()
    const fieldError = {}
    render(<FormSignUp handleSubmit={handleSubmit} fieldError={fieldError} />)

    const inputName = screen.getByPlaceholderText(/Your name/i)
    const name = 'Name name name'
    userEvent.type(inputName, name)

    const inputEmail = screen.getByPlaceholderText(/Your email/i)
    const email = 'success@email.com.br'
    userEvent.type(inputEmail, email)

    const inputPassword = screen.getByLabelText('Password')
    const password = 'success123456'
    userEvent.type(inputPassword, password)

    const inputPasswordConfirm = screen.getByLabelText(/Confirm password/i)
    const passwordConfirm = 'success123456'
    userEvent.type(inputPasswordConfirm, passwordConfirm)

    const submit = screen.getByText('Sign up')
    fireEvent.submit(submit)
    expect(handleSubmit).toBeCalled()
  })
})
