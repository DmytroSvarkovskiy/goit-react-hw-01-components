import styled from 'styled-components';
export const FrienrStatus = styled.span`
  border-radius: 50%;
  display: flex;
  height: 12px;
  width: 12px;
  background-color: ${prop => (prop.status ? 'green' : 'red')};
`;
export const FriendsLogo = styled.img`
  width: 50px;
  height: 50px;
`;
