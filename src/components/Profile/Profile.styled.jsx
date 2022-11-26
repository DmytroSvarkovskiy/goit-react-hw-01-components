import styled from 'styled-components';
export const ProfImg = styled.img`
  padding: 15px;
  width: 150px;
  border-radius: 50%;
`;
export const ProfUl = styled.ul`
  list-style: none;
  background-color: ${p => p.theme.colors.white};
  display: flex;
  gap: 15px;
  height: 60px;
  padding: 20px;
  margin: 0;
  justify-content: space-around;
  align-items: center;
`;
