import * as S from './styles'

import { useState } from 'react'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClickMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <S.Header menuOpen={isOpen}>
      <S.Content>
        <S.Logo />

        <S.MenuIconMobile onClick={onClickMenu} />

        <S.NavBar />

        <S.DivButtons>
          <>
            <S.Link href="/sign-in">
              <S.ButtonLeft>Sign In</S.ButtonLeft>
            </S.Link>
            <S.Link href="/sign-up">
              <S.ButtonRight>Sign Up</S.ButtonRight>
            </S.Link>
          </>
        </S.DivButtons>
      </S.Content>
    </S.Header>
  )
}

export default Menu
