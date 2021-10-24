import userEvent from '@testing-library/user-event'
import { render, screen } from 'utils/test-utils'

import { listStates } from './mockStates'
import { Location } from '@styled-icons/evil/'

import InputSearch from '.'

describe('<InputSearch />', () => {
  it('should render the InputSearch', () => {
    const { container } = render(<InputSearch />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('Renders with label', () => {
    render(<InputSearch label="labelText" name="nameText" />)

    expect(screen.getByLabelText('labelText')).toBeInTheDocument()
  })

  it('Renders with initialValue', () => {
    const text = 'This is my new text'
    render(<InputSearch initialValue={text} />)

    const input = screen.getByRole('textbox')
    expect(input).toHaveValue(text)
  })

  it('Renders with placeholder', () => {
    render(<InputSearch placeholder="hey you" />)

    expect(screen.getByPlaceholderText('hey you')).toBeInTheDocument()
  })

  it('Renders with error', () => {
    render(<InputSearch error="Required field" />)

    expect(screen.getByText('Required field')).toBeInTheDocument()
  })

  it('Render with disabled', () => {
    render(<InputSearch label="InputSearch" name="InputSearch" disabled />)

    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
  })

  it('Renders with getValue', () => {
    const getValue = jest.fn()

    render(
      <InputSearch label="InputSearch" name="InputSearch" getValue={getValue} />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    expect(getValue).toHaveBeenCalled()
  })

  it('Renders with widthInput', () => {
    render(
      <InputSearch label="InputSearch" name="InputSearch" widthInput={45} />
    )

    expect(screen.getByTestId('Wrapper')).toHaveStyle({
      width: '45rem'
    })
  })

  it('Renders with onClickSearch', () => {
    const onClickSearch = jest.fn()

    render(
      <InputSearch
        label="InputSearch"
        name="InputSearch"
        onClickSearch={onClickSearch}
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    const icon = screen.getByTestId('DivIcon')
    userEvent.click(icon)

    expect(onClickSearch).toHaveBeenCalled()
  })

  it('Renders with autoComplete', () => {
    render(
      <InputSearch
        label="InputSearch"
        name="InputSearch"
        searchAutoComplete={true}
      />
    )

    const input = screen.getByRole('textbox')
    const text = 'This is my new text'
    userEvent.type(input, text)

    expect(input).toHaveValue(text)
  })

  it('Renders with optionsAutoComplete and iconAutoComplete', () => {
    render(
      <InputSearch
        label="InputSearch"
        name="InputSearch"
        searchAutoComplete={true}
        optionsAutoComplete={listStates}
        iconAutoComplete={<Location />}
      />
    )

    expect(screen.queryByText(/Acre/i)).not.toBeInTheDocument()

    const input = screen.getByRole('textbox')
    const text = 'AC'
    userEvent.type(input, text)
    expect(screen.queryByText(/Acre/i)).toBeInTheDocument()

    const span = screen.getByText(/Acre/i)
    userEvent.click(span)
    expect(screen.queryByText(/Alagoas/i)).not.toBeInTheDocument()

    userEvent.clear(input)
    expect(screen.queryByText(/Acre/i)).not.toBeInTheDocument()
  })
})
