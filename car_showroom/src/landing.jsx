import styled, { keyframes } from 'styled-components';

import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'; // optional but convenient
import { Car } from '../Components/car';
import Engine from './engine';
import Interior from './interior';
import History from './history';
function Landing() {
  return (
    <>
      <PageContainer>
        <BackgroundHolder></BackgroundHolder>
        <GradientWrapper>
          <MainWrapper>
            <Navbar>
              <p id="navbar">OVERVIEW</p>
              <p id="navbar">HISTORY</p>
              <p id="navbar">ENGINE</p>
            </Navbar>
            <StyledHeader>
              <h1>THE M3</h1>
            </StyledHeader>
            <CanvasWrapper>
              <Canvas style={{ width: '75%', height: '100%' }}>
                <Environment preset="studio" />
                <OrbitControls
                  minDistance={5} // Minimum zoom distance (can't get closer than this)
                  maxDistance={6} // Maximum zoom distance (can't get further than this)
                  zoomSpeed={0.2}
                  enablePan={false}
                  minPolarAngle={Math.PI / 4}
                  maxPolarAngle={Math.PI / 2}
                />
                <Car scale={1.8}></Car>
              </Canvas>
            </CanvasWrapper>
          </MainWrapper>
          <EmPerformance></EmPerformance>
          <History />
        </GradientWrapper>

        <Engine />
      </PageContainer>
    </>
  );
}

const GradientWrapper = styled.div`
  background-image: linear-gradient(
    to bottom,

    #f6f4f1 30%,
    #81c4ff 100%
  );
  z-index: 1;
`;
const BackgroundHolder = styled.div`
  background-image: url('../src/assets/sliki/pozadinaProtivMojaVolja.png');
  background-size: cover;
  width: 100%;
  height: 50vh;
  position: absolute;
  z-index: 0;
`;
const PageContainer = styled.div`
  width: 100%;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
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
const canvasSlideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;
const CanvasWrapper = styled.div`
  position: relative;
  width: 100%;
  margin-top: 90px;
  height: 100vh;
  display: flex;
  justify-content: center;
  transform: translateY(100%);
  opacity: 0;
  animation: ${canvasSlideUp} 1.5s ease-out forwards;
  animation-delay: 0.2s; /* Start after the header animation begins */
`;
const StyledHeader = styled.div`
  position: absolute;
  top: 15%;
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
    background: linear-gradient(to bottom, black, rgb(156, 155, 155));
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

  background-size: cover;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* Correct property with hyphen */
  scrollbar-width: none;
`;
const EmPerformance = styled.div`
  background-image: url('../src/assets/sliki/pozadinaProtivChoveshtvoto.png');
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 50vh;
  position: absolute;
  top: 690px;
  z-index: 0;
`;

export default Landing;
