import styled from 'styled-components';

export const Restaurant = styled.div`
  background-color: #fff;
  border: 0.3rem solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-top: 0.3rem;
  padding: 1rem;
  :hover {
    background-color: ${(props) => props.theme.colors.background};
    border-left-color: ${(props) => props.theme.colors.primary};
  }
`;

export const RestaurantInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
  margin-bottom: 0.5rem;
`;

export const Address = styled.span`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 1rem;
  line-height: 1.25rem;
  margin: 0.5rem 0;
`;

export const RestaurantPhoto = styled.img`
  border-radius: 0.5rem;
  height: 6rem;
  object-fit: cover;
  width: 6rem;
`;
