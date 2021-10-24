import userEvent from '@testing-library/user-event'
import { render, waitFor, screen, act, fireEvent } from 'utils/test-utils'

import UploadSimple from '.'

describe('<UploadSimple />', () => {
  it('should render the UploadSimple', () => {
    const { container } = render(<UploadSimple />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('must upload one file', () => {
    render(<UploadSimple button="Choose file" name="inputFile" />)

    const file = [new File(['foo'], 'foo.pdf', { type: 'application/pdf' })]

    const input = screen.getByLabelText('Choose file')
    fireEvent.change(input, {
      target: { files: file }
    })
  })

  it('must upload two file', async () => {
    render(<UploadSimple button="Choose file" name="inputFile" />)

    await waitFor(() => {
      const files = [
        new File(['foo'], 'foo.pdf', { type: 'application/pdf' }),
        new File(['bar'], 'bar.png', { type: 'image/png' })
      ]

      const input = screen.getByLabelText('Choose file')
      userEvent.upload(input, files)
    })

    expect(screen.getByText('foo.pdf')).toBeInTheDocument()
    expect(screen.getByText('bar.png')).toBeInTheDocument()
  })

  it('must remove a file from the list', async () => {
    render(<UploadSimple button="Choose file" name="inputFile" />)

    await waitFor(() => {
      const files = [new File(['foo'], 'foo.pdf', { type: 'application/pdf' })]

      const input = screen.getByLabelText('Choose file')
      userEvent.upload(input, files)
    })

    act(() => {
      const closeIcon = screen.getAllByTestId('CloseIcon')
      userEvent.click(closeIcon[0])
      expect.anything()
    })
  })

  it('should render the UploadSimple with label', () => {
    render(<UploadSimple label="Choose file" />)

    const label = screen.getByText('Choose file')
    expect(label).toBeInTheDocument()
  })

  it('should render the UploadSimple disabled', () => {
    render(
      <UploadSimple disabled={true} button="Choose file" name="inputFile" />
    )

    const input = screen.getByLabelText('Choose file')
    expect(input).toBeDisabled()
  })

  it('should render the UploadSimple with error', () => {
    render(
      <UploadSimple
        error="Required field"
        button="Choose file"
        name="inputFile"
      />
    )

    const error = screen.getByText('Required field')
    expect(error).toBeInTheDocument()
  })

  it('should render the UploadSimple with getValues', async () => {
    const getValues = jest.fn()
    render(
      <UploadSimple
        button="Choose file"
        name="inputFile"
        getValues={getValues}
      />
    )

    await waitFor(() => {
      const file = [new File(['foo'], 'foo.pdf', { type: 'application/pdf' })]

      const input = screen.getByLabelText('Choose file')
      userEvent.upload(input, file)
    })

    expect(getValues).toHaveBeenCalled()
  })
})
