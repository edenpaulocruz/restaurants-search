import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  height: 100vh;
  overflow-y: auto;
  width: 360px;
`;

export const Search = styled.section`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
`;

export const Logo = styled.img`
  align-self: center;
  margin-bottom: 1rem;
  width: 60%;
`;

export const Map = styled.div`
  background-color: darkgray;
  width: calc(100% - 360px)
`;
