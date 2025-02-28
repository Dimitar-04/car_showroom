import styled, { keyframes } from 'styled-components';
import ThreeDObject from './ThreeDObject';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls, useGLTF } from '@react-three/drei'; // optional but convenient
import { Chest } from '../Components/chest';

function Model() {
  // Load from the public folder using an absolute path
  const { scene } = useGLTF('/labs5final.gltf');
  return <primitive object={scene} />;
}
function Landing() {
  return (
    <>
      <MainWrapper>
        <Navbar>
          <p>Overview</p>
          <p>Engine</p>
          <p>Interior</p>
          <p>History</p>
        </Navbar>

        <Canvas style={{ marginTop: '300px' }}>
          <Environment preset="studio" />
          <OrbitControls />
          <Chest></Chest>
        </Canvas>
      </MainWrapper>
      ;
    </>
  );
}
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

const Navbar = styled.div`
  position: absolute;
  display: flex;
  gap: 20px;
  font-size: 25px;
  top: 0;
  right: 5%;
  cursor: pointer;
  color: var(--textColor);
  animation: ${slideIn} 1s ease-out; /* Apply the animation */
  p:hover {
    color: black;
    cursor: pointer;
  }
`;

const MainWrapper = styled.div`
  position: fixed;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background: url('/src/assets/sliki/background.png') no-repeat center center;
  background-size: cover;
`;
export default Landing;
