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
  //   gap: 15px;
  height: 80px;
  padding: 0px;
  margin: 0;
  justify-content: space-around;
  align-items: center;
`;
export const ProfItem = styled.li`
  width: 100%;
  height: 100%;

  :not(:last-child) {
    border-right: 2px solid ${p => p.theme.colors.background};
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
