import Image from 'next/image'
import * as S from './styles'

const MainBanner = () => (
  <S.Wrapper>
    <S.Container>
      <Image src="/img/main-banner.jpg" alt="" layout="fill" />
      <div className="banner-info">
        <h1>Lorem ipsum dolor</h1>
        <p>
          sit amet, consectetur adipisicing elit. Repellat, delectus! Eveniet
          obcaecati quis reprehenderit accusamus, optio dolore at deleniti quasi
          assumenda recusandae officiis magnam, iure ullam dicta corporis ut
          laborum?
        </p>
        <button>Read Article</button>
      </div>
    </S.Container>
  </S.Wrapper>
)

export default MainBanner
