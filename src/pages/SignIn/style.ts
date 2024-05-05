import styled from 'styled-components'

export const Conteiner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  background-color: ${({ theme }) => theme.colors.toolTipBackground};
`
