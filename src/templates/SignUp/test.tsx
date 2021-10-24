import userEvent from '@testing-library/user-event'
import { fireEvent, render, screen } from 'utils/test-utils'

import SignUp from '.'

describe('<SignUp />', () => {
  it('should render the SignUp', () => {
    const { container } = render(<SignUp />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be submit form with success', () => {
    render(<SignUp />)

    const inputName = screen.getByPlaceholderText(/Your name/i)
    const name = 'Name name name'
    userEvent.type(inputName, name)

    const inputEmail = screen.getByPlaceholderText(/Your email/i)
    const email = 'sucess@email.com.br'
    userEvent.type(inputEmail, email)

    const inputPassword = screen.getByLabelText('Password')
    const password = 'success123456'
    userEvent.type(inputPassword, password)

    const inputPasswordConfirm = screen.getByLabelText(/Confirm password/i)
    const passwordConfirm = 'success123456'
    userEvent.type(inputPasswordConfirm, passwordConfirm)

    const submit = screen.getByText('Sign up')
    fireEvent.submit(submit)
  })

  it('should be submit form with invalid field', () => {
    render(<SignUp />)

    const inputName = screen.getByPlaceholderText(/Your name/i)
    const name = 'Name'
    userEvent.type(inputName, name)

    const inputEmail = screen.getByPlaceholderText(/Your email/i)
    const email = 'erroremail.com.br'
    userEvent.type(inputEmail, email)

    const inputPassword = screen.getByLabelText('Password')
    const password = 'error'
    userEvent.type(inputPassword, password)

    const inputPasswordConfirm = screen.getByLabelText(/Confirm password/i)
    const passwordConfirm = 'error1'
    userEvent.type(inputPasswordConfirm, passwordConfirm)

    const submit = screen.getByText('Sign up')
    fireEvent.submit(submit)
  })
})
