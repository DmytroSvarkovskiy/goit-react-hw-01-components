import styled from 'styled-components';

export const TransCell = styled.td`
  text-align: center;
  width: 146px;
`;
export const TransTr = styled.tr`
  border: 1px solid ${p => p.theme.colors.background};
  :nth-child(2n) {
    background-color: ${p => p.theme.colors.background};
  }
`;
export const TransTrHead = styled.tr`
  background-color: ${p => p.theme.colors.thead};
  color: ${p => p.theme.colors.white};
`;
