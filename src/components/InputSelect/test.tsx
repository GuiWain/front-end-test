import userEvent from '@testing-library/user-event'
import { render, screen, waitFor } from 'utils/test-utils'

import InputSelect from '.'
import { listStates as mockOptions } from './mockStates'

describe('<InputSelect />', () => {
  it('should render the InputSelect', () => {
    const { container } = render(<InputSelect options={mockOptions} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the InputSelect with label', () => {
    render(
      <InputSelect options={mockOptions} label="LabelText" name="states" />
    )

    expect(screen.getByText('LabelText')).toBeInTheDocument()
  })

  it('should render the InputSelect with error', () => {
    render(<InputSelect options={mockOptions} error="Required field" />)

    expect(screen.getByText('Required field')).toBeInTheDocument()
  })

  it('should render the InputSelect disabled', async () => {
    render(
      <InputSelect
        options={mockOptions}
        disabled
        label="LabelText"
        name="states"
      />
    )

    const input = screen.getByTestId('Selected')
    userEvent.click(input)

    await waitFor(() => {
      userEvent.click(screen.getByText('Acre - AC'))
      userEvent.click(input)
    })

    expect(screen.getByText('LabelText')).toHaveStyle({
      cursor: 'not-allowed'
    })
  })

  it('should render the InputSelect with getValues', async () => {
    const getValues = jest.fn()

    render(
      <InputSelect
        options={mockOptions}
        label="LabelText"
        name="states"
        getValues={getValues}
      />
    )

    const input = screen.getByTestId('Selected')
    userEvent.click(input)

    await waitFor(() => {
      userEvent.click(screen.getByText('Acre - AC'))
      userEvent.click(input)
    })

    expect(getValues).toHaveBeenCalled()
  })

  it('should render the InputSelect with widthSelected', () => {
    render(<InputSelect options={mockOptions} widthSelected={27} />)

    expect(screen.getByTestId('Selected')).toHaveStyle({
      width: '27rem'
    })
  })

  it('should render the InputSelect with widthOptions', () => {
    render(<InputSelect options={mockOptions} widthOptions={27} />)

    expect(screen.getByTestId('OptionsContainer')).toHaveStyle({
      width: '27rem'
    })
  })

  it('should render the InputSelect with searchBox', () => {
    render(<InputSelect options={mockOptions} searchBox={true} />)

    const inputSelect = screen.getByTestId('Selected')
    userEvent.click(inputSelect)

    const inputText = screen.getByPlaceholderText(/Search by/i)
    userEvent.type(inputText, 'Acre')

    expect(screen.queryByText(/Tocantins/i)).not.toBeVisible()
  })
})
