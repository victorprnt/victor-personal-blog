import Image from 'next/image'
import * as S from './styles'

const CardMidSize = () => (
  <S.Wrapper>
    <S.Container>
      <Image
        src="/img/main-banner.jpg"
        alt=""
        layout="responsive"
        width="100"
        height="100"
      />
      <div className="card-info">
        <h2>Lorem ipsum dolor</h2>
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

export default CardMidSize
