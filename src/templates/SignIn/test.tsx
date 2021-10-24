import userEvent from '@testing-library/user-event'
import { fireEvent, render, screen } from 'utils/test-utils'

import SignIn from '.'

describe('<SignIn />', () => {
  it('should render the SignIn', () => {
    const { container } = render(<SignIn />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('must submit the form with success', () => {
    render(<SignIn />)

    const inputUsername = screen.getByPlaceholderText('Your email')
    const username = 'success@email.com'
    userEvent.type(inputUsername, username)

    const inputPassword = screen.getByLabelText(/Password/i)
    const password = 'success123456'
    userEvent.type(inputPassword, password)

    const submit = screen.getByText('Sign in')
    fireEvent.submit(submit)
  })

  it('must submit the form with invalid field', () => {
    render(<SignIn />)

    const inputUsername = screen.getByPlaceholderText('Your email')
    const username = 'error,email.com'
    userEvent.type(inputUsername, username)

    const inputPassword = screen.getByLabelText(/Password/i)
    const password = 'error'
    userEvent.type(inputPassword, password)

    const submit = screen.getByText('Sign in')
    fireEvent.submit(submit)
  })
})
