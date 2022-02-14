
import styled from 'styled-components';

export const Container = styled.div 
`
  display: flex;
  flex-direction: column;
  padding-bottom: 30px;

`;

export const InputStyled = styled.input
`
  padding: 10px;
  height: 28px;
  margin-top: 15px;
  font-size: 24px;
  border: none;
  border-radius: 8px;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.background};
`;