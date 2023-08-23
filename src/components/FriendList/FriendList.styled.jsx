
import styled from 'styled-components';

const colorIsOnline = props => {
  if (props.color.isOnline) {
    return "green"
  } else {
    return "red"
  }
}
export const SpanEl = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${colorIsOnline};
  border-radius: 50%;
`;
  
export const FriendsCards = styled.ul`
  padding: 0;
  margin-right: auto;
  margin-left: auto;
  gap: 15px;
  display: flex;
  width: 150px;
  list-style-type: none;
  flex-direction: column-reverse;
`;


export const FriendsCard = styled.li`
  display: flex;
  align-items: center;
`;

