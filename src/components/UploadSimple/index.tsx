import { useState, useEffect } from 'react'
import * as S from './styles'

import { v4 as uuidv4 } from 'uuid'

export type FileListValues = {
  id: string
  files: File
}

export type UploadSimpleProps = {
  getValues?: (field: FileListValues[]) => void
  label?: string
  button?: string
  name?: string
  multiple?: boolean
  disabled?: boolean
  error?: string
}

const UploadSimple = ({
  getValues,
  button,
  label,
  multiple = true,
  name,
  disabled = false,
  error
}: UploadSimpleProps) => {
  const [fileList, setFileList] = useState<FileListValues[]>([])

  useEffect(() => {
    if (getValues) {
      getValues(fileList)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fileList])

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files!
    const arrayFiles = Object.values(files)
    const array = arrayFiles.map((item) => ({ files: item, id: uuidv4() }))

    setFileList((s) => [...s, ...array])
  }

  const removeFile = (index: number) => {
    const newFiles = [...fileList]

    newFiles.splice(index, 1)
    setFileList(newFiles)
  }

  return (
    <S.Wrapper error={!!error} disabled={disabled}>
      {!!label && <S.LabelText>{label}</S.LabelText>}
      <S.DivInput>
        {!!button && <S.ButtonLabel htmlFor={name}>{button}</S.ButtonLabel>}
        <S.FileName>
          {fileList?.length && fileList?.length === 1
            ? fileList.length + ' Selected file'
            : null}
          {fileList?.length && fileList?.length > 1
            ? fileList.length + ' Selected files'
            : null}
          {fileList?.length ? null : 'No file selected'}
        </S.FileName>
        <S.InputFile
          id={name}
          name={name}
          onChange={(e) => onChange(e)}
          multiple={multiple}
          disabled={disabled}
        />
      </S.DivInput>
      <S.Animate>
        {!!fileList.length && (
          <S.FileList>
            <S.Animate>
              {fileList.map((item, index) => (
                <S.Motion
                  key={item.id}
                  transition={{ ease: 'easeInOut', duration: 0.5 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  <S.Item>
                    <S.DownloadIcon />
                    {item.files.name}
                    <S.CloseIcon onClick={() => removeFile(index)} />
                  </S.Item>
                </S.Motion>
              ))}
            </S.Animate>
          </S.FileList>
        )}
      </S.Animate>
      {!!error && <S.Error>{error}</S.Error>}
    </S.Wrapper>
  )
}

export default UploadSimple
