import * as S from './styles'

export type LogoProps = {
  size?: 'small' | 'normal' | 'large' | 'fullWidth'
}

const Logo = ({ size = 'normal', ...props }: LogoProps) => (
  <S.Wrapper size={size} {...props}>
    <S.Link href="/">
      <S.Content>
        <S.Image
          src="/img/logo-lorem-ipsum.png"
          alt="Logo Lorem Ipsum"
          width="600px"
          height="512px"
        />
      </S.Content>
    </S.Link>
  </S.Wrapper>
)

export default Logo
