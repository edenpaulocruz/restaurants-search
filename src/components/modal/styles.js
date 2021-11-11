import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  background: rgba(78, 89, 131, 0.5);
  backdrop-filter: blur(5px);

  z-index: 999;
`;
Overlay.displayName = 'Overlay';

export const Dialog = styled.div`
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 2rem rgba(78, 89, 131, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: calc(100% - 10rem);
  padding: 1.5rem;
  width: 30rem;
`;
