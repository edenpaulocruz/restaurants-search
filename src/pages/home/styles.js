import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    transition: 0.3s ease-in;
  }

  html {
    scroll-behavior: smooth;
  }
`;

export const Wrapper = styled.div`
  display: flex;
`;

export const Container = styled.aside`
  background-color: ${(props) => props.theme.colors.background};
  height: 100vh;
  overflow-y: auto;
  width: 29rem;
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
  width: calc(100% - 360px);
`;

export const CarouselTitle = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 2rem;
  margin-top: 1rem;
`;

export const ModalTitle = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.11px;
  line-height: 2rem;
  margin-bottom: 10px;
`;

export const ModalContent = styled.p`
  color: ${(props) => props.theme.colors.text};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 1rem;
  font-weight: normal;
  line-height: 1.25rem;
  margin-bottom: 10px;
  text-transform: none;
`;
