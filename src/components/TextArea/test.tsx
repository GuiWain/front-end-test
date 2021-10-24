import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import TextArea from '.'

describe('<TextArea />', () => {
  it('should render the TextArea', () => {
    const { container } = render(<TextArea />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the TextArea with text', () => {
    render(<TextArea />)

    const input = screen.getByTestId('TextArea')
    const text = 'This is my new text'
    userEvent.type(input, text)

    expect(input).toHaveValue(text)
  })

  it('should render the TextArea with Label', () => {
    render(<TextArea label="LabelText" />)

    expect(screen.getByText('LabelText')).toBeInTheDocument()
  })

  it('should render the TextArea with getValues', () => {
    const getValues = jest.fn()
    render(<TextArea getValues={getValues} />)

    const input = screen.getByTestId('TextArea')
    const text = 'This is my new text'
    userEvent.type(input, text)

    expect(getValues).toHaveBeenCalled()
  })

  it('should render the TextArea with error', () => {
    render(<TextArea error="This field is required" />)

    expect(screen.getByText('This field is required')).toBeInTheDocument()
  })

  it('should render the TextArea with resize vertical', () => {
    render(<TextArea resize="vertical" />)

    expect.anything()
  })

  it('should render the TextArea with resize horizontal', () => {
    render(<TextArea resize="horizontal" />)

    expect.anything()
  })

  it('should render the TextArea with resize both', () => {
    render(<TextArea resize="both" />)

    expect.anything()
  })

  it('should render the TextArea with letter count', () => {
    render(<TextArea letterCount={true} maxlength={100} />)

    const input = screen.getByTestId('TextArea')
    const text = 'This is my new text'
    userEvent.type(input, text)

    expect(screen.getByText('19 of 100 caracters')).toBeInTheDocument()
  })
})
