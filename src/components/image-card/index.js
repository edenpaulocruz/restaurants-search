import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-image: url(${(props) => props.photo});
  background-size: cover;
  border-radius: 0.5rem;
  height: 6rem;
  padding: 0.5rem;
  width: 6rem;
`;
const Title = styled.span`
  color: #fff;
  font-family: ${(props) => props.theme.fonts.regular};
`;

const ImageCard = ({ photo, title }) => (
  <Card photo={photo}>
    <Title>{title}</Title>
  </Card>
);

export default ImageCard;
