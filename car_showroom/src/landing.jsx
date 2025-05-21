import styled, { keyframes } from 'styled-components';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'; // optional but convenient
import { Car } from '../Components/car';
import Engine from './engine';
import History from './history';

function Landing() {
  const overviewRef = React.useRef(null);
  const historyRef = React.useRef(null);
  const engineRef = React.useRef(null);

  const scroll = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <PageContainer>
        <BackgroundHolder></BackgroundHolder>
        <MainWrapper>
          <Navbar>
            <p onClick={() => scroll(overviewRef)}>OVERVIEW</p>
            <p onClick={() => scroll(historyRef)}>HISTORY</p>
            <p onClick={() => scroll(engineRef)}>ENGINE</p>
          </Navbar>
          <StyledHeader>
            <h1>THE M3</h1>
          </StyledHeader>
          <CanvasWrapper>
            <Canvas style={{ width: '75%', height: '100%' }}>
              <Environment preset="studio" />
              <OrbitControls
                minDistance={5}
                maxDistance={6}
                zoomSpeed={0.2}
                enablePan={false}
                minPolarAngle={Math.PI / 4}
                maxPolarAngle={Math.PI / 2}
              />
              <Car scale={1.8}></Car>
            </Canvas>
          </CanvasWrapper>
          <IntroParagraph>
            <h2 class="IntroParagraph">THE ULTIMATE DRIVING MACHINE</h2>
            <p class="IntroParagraph">
              The BMW M3 GTR is a legendary sports car that combines advanced
              engineering with striking design. Built for performance and
              agility, it delivers exceptional handling and precision on every
              road and track. Revered by enthusiasts, the M3 GTR stands as a
              symbol of BMW’s commitment to driving excellence and motorsport
              heritage.
            </p>
          </IntroParagraph>
        </MainWrapper>
        <div ref={historyRef}>
          <History />
        </div>
        <div ref={engineRef}>
          <Engine />
        </div>
      </PageContainer>
    </>
  );
}

const IntroParagraph = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
  min-width: 70%;

  margin: 20px auto;
  color: rgba(8, 27, 46, 1);
`;

const PageContainer = styled.div`
  width: 100%;
  height: auto;

  position: relative;

  overflow-x: hidden;
  overflow-y: auto;
`;

const BackgroundHolder = styled.div`
  width: 100%;
  height: 50vh;

  position: absolute;

  background-image: url('../src/assets/sliki/pozadinaProtivMojaVolja.png');
  background-size: cover;

  z-index: 10;
  pointer-events: none;
`;

const MainWrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 200vh;
  @media (min-width: 1600px) {
    height: 160vh;
  }
  z-index: 1;

  background-size: cover;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  background: linear-gradient(
    180deg,
    rgba(242, 242, 242, 1) 0%,
    rgba(83, 104, 120, 1) 100%
  );
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
  height: 10vh;
  position: absolute;
  display: flex;
  gap: 20px;
  font-size: 30px; /* Increase from 20% to 1rem for better visibility */
  top: 0;
  right: 5%;
  animation: ${slideIn} 1s ease-out;
  /* Ensure the navbar is on top */

  p {
    color: #333;
    padding: 8px 16px;
    margin: 0;
    /* Ensure the text is on top */
    transition: color 0.2s;
    &:hover {
      color: black;
      cursor: pointer;
    }
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
    background: linear-gradient(
      to bottom,
      rgba(8, 27, 46, 1),
      rgb(114, 114, 114)
    );
    background-size: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    animation: ${gradientAnimation} 2s ease-out forwards; /* Apply the gradient animation */
  }
`;

export default Landing;
