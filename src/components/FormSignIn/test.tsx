import { fireEvent, render, screen } from 'utils/test-utils'
import userEvent from '@testing-library/user-event'
import FormSignIn from '.'

describe('<FormSignIn />', () => {
  it('should render the FormSignIn', () => {
    const handleSubmit = jest.fn()
    const fieldError = {}

    const { container } = render(
      <FormSignIn handleSubmit={handleSubmit} fieldError={fieldError} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should be submit form', async () => {
    const handleSubmit = jest.fn()
    const fieldError = {}

    render(<FormSignIn handleSubmit={handleSubmit} fieldError={fieldError} />)
    const inputUsername = screen.getByPlaceholderText(/Your email/i)
    const username = 'success@email.com.br'
    userEvent.type(inputUsername, username)

    const inputPassword = screen.getByLabelText(/Password/i)
    const password = 'success123456'
    userEvent.type(inputPassword, password)

    const submit = screen.getByText('Sign in')
    fireEvent.submit(submit)
    expect(handleSubmit).toBeCalled()
  })
})
