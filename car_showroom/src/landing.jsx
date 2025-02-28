import styled, { keyframes } from 'styled-components';
import ThreeDObject from './ThreeDObject';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'; // optional but convenient
import { Chest } from '../Components/chest';
import Engine from './engine';
import Interior from './interior';
import History from './history';
function Landing() {
  return (
    <>
      <PageContainer>
        <MainWrapper>
          <Navbar>
            <p>OVERVIEW</p>
            <p>ENGINE</p>
            <p>INTERIOR</p>
            <p>HISTORY</p>
          </Navbar>
          <StyledHeader>
            <h1>THE M3</h1>
          </StyledHeader>
          <Canvas style={{ marginTop: '300px', height: '100vh', width: '60%' }}>
            <Environment preset="studio" />
            <OrbitControls />
            <Chest></Chest>
          </Canvas>
        </MainWrapper>
        <Engine />
        <Interior />
        <History />
      </PageContainer>
    </>
  );
}
const PageContainer = styled.div`
  width: 100%;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
`;
const gradientAnimation = keyframes`
  0% {
    background-position: 0% 0%;
  }
  100% {
    background-position: 100% 100%;
  }
`;
const slideIn = keyframes`
    from {
        transform: translateY(20px);
        opacity: 0;
    }
    to {
        transform: translateY(0);
        opacity: 1;
    }
    `;
const slideUp = keyframes`
    from {
      transform: translate(-50%, 100%); /* Maintain horizontal centering */
      opacity: 0;
    }
    to {
      transform: translate(-50%, 0);
      opacity: 1;
    }
  `;

const Navbar = styled.div`
  position: absolute;
  display: flex;
  gap: 20px;
  font-size: 23px;
  top: 0;
  right: 5%;
  cursor: pointer;
  color: var(--textColor);
  animation: ${slideIn} 1s ease-out;
  p:hover {
    color: black;
    cursor: pointer;
  }
`;
const StyledHeader = styled.div`
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translate(-50%, 100%);
  width: 100vw;
  display: flex;
  justify-content: center;

  z-index: 0; /* Ensures the text is on top of the canvas */
  animation: ${slideUp} 2s ease-out forwards; /* Apply the animation */
  padding: 10px 20px;
  /* Prevents unnecessary stretching */
  transform-origin: center;
  h1 {
    margin: 0;
    font-size: 260px;

    background: linear-gradient(to bottom, rgb(26, 25, 25), rgb(236, 219, 219));
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    animation: ${gradientAnimation} 2s ease-out forwards; /* Apply the gradient animation */
  }
`;

const MainWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
  z-index: 1;
  background: url('/src/assets/sliki/background.png') no-repeat center center;
  background-size: cover;
`;
export default Landing;
