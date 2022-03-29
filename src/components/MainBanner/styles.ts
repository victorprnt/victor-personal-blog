import styled from 'styled-components'

export const Wrapper = styled.section``
export const Container = styled.div`
  width: 100%;
  height: 40vh;
  position: relative;

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    /* top: 0;
    bottom: 0;
    left: 0;
    right: 0; */
    z-index: 1;
    object-fit: cover;
    filter: brightness(0.75);
  }
  .banner-info {
    height: 100%;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 4rem;
    padding-left: 4rem;

    h1,
    p,
    button {
      z-index: 100;
    }

    h1,
    p {
      margin-bottom: 1.5rem;

      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2; /* number of lines to show */
      line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    h1 {
      font-size: 3rem;
      line-height: 3.5rem;
      color: #ecede8;
      letter-spacing: 0.2rem;
    }

    p {
      font-size: 1rem;
      line-height: 2rem;
      color: #ecede8;
      letter-spacing: 0.2rem;
    }

    button {
      max-width: fit-content;
      padding: 0.75rem 2.5rem;
      background-color: #192a51;
      border: none;
      color: #fff;
      letter-spacing: 0.2rem;
      font-weight: 500;

      cursor: pointer;

      transition: all 0.2s ease-in-out;

      &:hover {
        background-color: #22386d;
      }
    }
  }
`
