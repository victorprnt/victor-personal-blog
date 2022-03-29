import styled from 'styled-components'

export const Wrapper = styled.article`
  width: 30%;
  /* height: 300px; */
`
export const Container = styled.div`
  width: 100%;
  height: 100%;

  img {
    max-width: 100% !important;
    max-height: 100% !important;
    object-fit: cover;

    margin-bottom: 0.825rem !important;

    border-radius: 4px;
  }

  h2,
  p {
    margin-bottom: 0.825rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  h2 {
    font-size: 2rem;
    line-height: 2.5rem;
    color: #192a51;
    letter-spacing: 0.2rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 2rem;
    color: #192a51;
    letter-spacing: 0.2rem;
  }

  button {
    max-width: fit-content;
    padding: 0.75rem 2.5rem;
    background-color: #fff;
    border: 1px solid #192a51;
    color: #192a51;
    letter-spacing: 0.2rem;
    font-weight: 500;

    cursor: pointer;

    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #192a51;
      color: #fff;
    }
  }
`
