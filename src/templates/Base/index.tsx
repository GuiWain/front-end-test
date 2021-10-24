import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  return (
    <S.Wrapper>
      <S.Menu />

      <S.Content>{children}</S.Content>

      <S.Footer />
    </S.Wrapper>
  )
}

export default Base
