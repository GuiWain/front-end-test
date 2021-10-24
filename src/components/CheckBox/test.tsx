import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import CheckBox from '.'

describe('<CheckBox />', () => {
  it('should render the CheckBox', () => {
    const { container } = render(<CheckBox />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the CheckBox with Label', () => {
    render(<CheckBox label="Checkbox" name="name" />)

    expect(screen.getByText('Checkbox')).toBeInTheDocument()
  })

  it('should render the CheckBox checked', () => {
    render(<CheckBox />)

    const input = screen.getByTestId('CheckBox')
    userEvent.click(input)

    expect(input).toBeChecked()
  })

  it('should render the CheckBox with getValues', () => {
    const getValues = jest.fn()
    render(<CheckBox getValues={getValues} />)

    const input = screen.getByTestId('CheckBox')
    userEvent.click(input)

    expect(getValues).toHaveBeenCalled()
  })

  it('should render the CheckBox with error', () => {
    render(<CheckBox error="Required field" />)

    const input = screen.getByTestId('CheckBox')
    userEvent.click(input)

    expect(screen.getByText('Required field')).toBeInTheDocument()
  })

  it('should render the CheckBox disabled', () => {
    render(<CheckBox disabled />)

    const input = screen.getByTestId('CheckBox')
    expect(input).toBeDisabled()
  })

  it('should render the CheckBox width default defaultChecked', () => {
    render(<CheckBox defaultChecked={true} />)

    const input = screen.getByTestId('CheckBox')
    expect(input).toBeChecked()
  })
})
