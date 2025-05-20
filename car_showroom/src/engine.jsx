import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

function Engine() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;
    let isDisassembled = false;
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    currentMount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      currentMount.clientWidth / currentMount.clientHeight,
      0.01,
      5000
    );
    camera.position.set(4, 5, 11);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;

    controls.minDistance = 15;
    controls.maxDistance = 18;
    console.log(controls.minDistance);
    controls.minPolarAngle = 0.5;
    controls.maxPolarAngle = 1.5;
    controls.autoRotate = false;
    controls.target = new THREE.Vector3(0, 0, 0);
    controls.update();

    // Lights
    const spotlight = new THREE.SpotLight(0xffffff, 15);
    spotlight.position.set(5, 10, 5);
    spotlight.angle = Math.PI / 4;
    spotlight.penumbra = 0.5;
    spotlight.distance = 20;
    spotlight.castShadow = true;
    spotlight.shadow.mapSize.width = 1024;
    spotlight.shadow.mapSize.height = 1024;
    scene.add(spotlight);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 25, 0);
    scene.add(light);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    let mixer;
    let actions = [];

    const loader = new GLTFLoader();
    loader.load(
      '/models/Assembled V8 Engine with Disassemble Animation 3 seconds.glb',
      (gltf) => {
        const mesh = gltf.scene;
        mesh.scale.set(0.6, 0.6, 0.6);
        mesh.position.set(0, 1.5, 0);
        mesh.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (!child.material)
              child.material = new THREE.MeshStandardMaterial();
          }
        });
        scene.add(mesh);

        const box = new THREE.Box3().setFromObject(mesh);
        const size = new THREE.Vector3();
        box.getSize(size);
        const height = size.y;
        mesh.position.y = height / 2;

        // Setup animation mixer
        if (gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(mesh);
          gltf.animations.forEach((clip) => {
            const action = mixer.clipAction(clip);
            action.setLoop(THREE.LoopOnce);
            action.clampWhenFinished = true;
            actions.push(action);
          });
        }
      }
    );

    // Toggle disassemble/reassemble on click
    let mouseDownTimestamp = 0;
    const MAX_CLICK_DURATION = 1000; // 1 second

    // Your existing animation logic - THIS WILL NOT BE CHANGED
    const handleClick = () => {
      if (actions.length > 0) {
        actions.forEach((action) => {
          if (isDisassembled) {
            console.log(controls.minDistance);
            controls.minDistance = 15;
            controls.maxDistance = 18;
            action.timeScale = -1; // Reverse
            action.paused = false;
            // Ensure animation plays from the end when reversing if it's at the start
            if (action.time === 0) {
              action.time = action.getClip().duration;
            }
            action.play();
          } else {
            controls.minDistance = 5;
            controls.maxDistance = 20;
            action.timeScale = 1; // Normal
            action.paused = false; // Ensure it's not paused
            action.reset().play();
          }
        });
        isDisassembled = !isDisassembled;
      }
    };

    // --- New event handlers to measure click duration ---
    const handleMouseDown = () => {
      mouseDownTimestamp = Date.now();
    };

    const handleMouseUp = () => {
      if (mouseDownTimestamp === 0) return; // Mousedown didn't occur on this element or was reset

      const clickDuration = Date.now() - mouseDownTimestamp;
      mouseDownTimestamp = 0; // Reset timestamp

      if (clickDuration < 100) {
        handleClick(); // Call your existing animation logic
      }
    };

    const handleMouseLeave = () => {
      // If mouse leaves while pressed, reset mouseDownTimestamp to prevent accidental trigger
      if (mouseDownTimestamp !== 0) {
        mouseDownTimestamp = 0;
      }
    };

    // Remove the direct 'click' listener and add mousedown/mouseup listeners
    // renderer.domElement.removeEventListener('click', handleClick); // This line is effectively replaced
    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    renderer.domElement.addEventListener('mouseup', handleMouseUp);
    renderer.domElement.addEventListener('mouseleave', handleMouseLeave);

    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const width = currentMount.clientWidth;
      const height = currentMount.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('click', handleClick);
      cancelAnimationFrame(animate);

      scene.remove(light);
      scene.remove(ambientLight);
      scene.remove(spotlight);

      renderer.dispose();
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <MainWrapper>
      <Container>
        <TextBox1>
          <div id="textbox1">
            <div>
              <h2>Engine:</h2>
              <p>4.0L V8 (P60B40)</p>
            </div>
            <div id="left_indent">
              <h2>Power:</h2>
              <p>493 hp (368 kW)</p>
            </div>
            <div>
              <h2>Torque:</h2>
              <p>480 Nm (354 lb-ft)</p>
            </div>
          </div>
          <div id="textbox2">
            <div>
              <h2>Layout:</h2>
              <p>Naturally aspirated</p>
            </div>
            <div id="right_indent">
              <h2>Weight:</h2>
              <p>135 kg (engine only)</p>
            </div>
            <div>
              <h2>Redline:</h2>
              <p>8,200 rpm</p>
            </div>
          </div>
        </TextBox1>
        <CanvasContainer ref={mountRef} />
      </Container>
    </MainWrapper>
  );
}

const MainWrapper = styled.div`
  width: 100%;
  height: 100vh;

  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  background: radial-gradient(circle,rgba(42, 52, 61, 1) 4%, rgba(8, 27, 46, 1) 32%);
  
  text-align: center;
`;

const Container = styled.div`
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
`;

const TextBox1 = styled.div`

  position: relative; 
  display: flex;
  justify-content: center;
  align-items: center;
  gap:35%;

  color: var(--primaryBackgroundWhite);
  
  font-size: 150%;
  z-index: 1; 
`;

const CanvasContainer = styled.div`
  width: 60%;
  height: 100%;
  
  position: absolute;
  top: 12%;
  display: flex;
  justify-content: center;
  align-items: center;

  z-index: 11;
  transform: translateZ(0);
`;



export default Engine;
