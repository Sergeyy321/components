
import styled from 'styled-components';

const colorIsOnline = props => {
  if (props.color.isOnline) {
    return "green"
  } else {
    return "red"
  }
}
export const spanEl = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${colorIsOnline};
  border-radius: 50%;
`;
  
export const FriendsCards = styled.ul`
  background-color: #53ffa9;
  padding: 0;
  margin: 0;
  width: 250px;
  list-style-type: none;
`;


export const FriendsCard = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
`;

