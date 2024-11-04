import styled from 'styled-components'

export const UserInput = styled.form`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 32px;

  img {
    width: 60px;
    margin-bottom: 32px;
  }

  input[type='text'] {
    width: 300px;
    height: 60px;
    padding-left: 20px;
    border-radius: 10px;
    border: 1px solid #000;
    background: #0a0a0a;
    color: ${(props) => props.theme['gray-100']};
  }

  input[type='submit'] {
    width: 300px;
    height: 60px;
    border-radius: 10px;
    color: ${(props) => props.theme['gray-100']};
    background: ${(props) => props.theme['green-700']};
    border: 0;
    cursor: pointer;

    &:not(:disabled):hover {
      background: ${(props) => props.theme['green-500']};
    }

    &:disabled {
      cursor: not-allowed;
    }
  }
`
