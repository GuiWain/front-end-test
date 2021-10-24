import * as S from './styles'

const NavBar = ({ ...props }) => (
  <S.Nav {...props}>
    <S.List>
      <S.Link href="#">
        <S.Item>Link 1</S.Item>
      </S.Link>
      <S.Link href="#">
        <S.Item>Link 2</S.Item>
      </S.Link>
      <S.Link href="#">
        <S.Item>Link 3</S.Item>
      </S.Link>
      <S.Link href="#">
        <S.Item>Link 4</S.Item>
      </S.Link>
      <S.Link href="#">
        <S.Item>Link 5</S.Item>
      </S.Link>
      <S.Link href="#">
        <S.Item>Link 6</S.Item>
      </S.Link>
    </S.List>
  </S.Nav>
)

export default NavBar
