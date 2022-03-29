import Image from 'next/image'
import * as S from './styles'

const Header = () => (
  <S.Wrapper>
    <S.Container>
      <Image src="/img/logo.svg" alt="" width="48" height="16" />
      <div className="menu-options">
        <a href="#">Home</a>
        <a href="#">About us</a>
        <a href="#">The Project</a>
      </div>
    </S.Container>
  </S.Wrapper>
)

export default Header
