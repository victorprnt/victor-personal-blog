import styled from 'styled-components'

export const Wrapper = styled.header`
  width: 100%;
  background-color: #fff;
`
export const Container = styled.div`
  max-width: 85%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 2rem 0;

  .menu-options {
    display: flex;

    a {
      text-decoration: none;
      font-size: 1.5rem;
      color: #192a51;
      position: relative;
      font-weight: 500;
      transition: all 0.2s ease-in-out;

      &::after {
        content: '';
        position: absolute;
        width: 0;
        height: 2px;
        background-color: #192a51;
        bottom: -4px;
        left: 50%;
        transform: translateX(-50%);
        transition: all 0.2s ease-in-out;
      }

      &:not(:last-child) {
        margin-right: 6rem;
      }

      &:hover::after {
        width: 80%;
      }
    }
  }
`
