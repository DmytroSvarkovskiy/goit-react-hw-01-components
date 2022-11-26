import styled from 'styled-components';
export const StatTitle = styled.h2`
  font-size: ${p => p.theme.fontSizes[4]};
  margin-bottom: 20px;
  text-align: center;
`;
export const StatList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
  height: 60px;
  justify-content: space-evenly;
`;
export const StatItem = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
