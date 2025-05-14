import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
// Removed Canvas, OrbitControls, PerspectiveCamera from '@react-three/drei' as we are not using R3F here
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'; // Import OrbitControls from Three.js examples
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'; // Import GLTFLoader for loading 3D models // Import GLTFLoader for loading 3D models
function Engine() {
  const mountRef = useRef(null); // Ref for the div where Three.js canvas will be mounted

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) {
      return; // Should not happen if ref is set up correctly
    }

    // --- Start of Vanilla Three.js script integration ---
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true }); // alpha: true for transparent background
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
      1,
      1000
    );
    camera.position.set(4, 5, 11);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true; // an animation loop is required when either damping or auto-rotation are enabled
    controls.enablePan = false;
    controls.minDistance = 15;
    controls.maxDistance = 18;
    controls.minPolarAngle = 0.5;
    controls.maxPolarAngle = 1.5;
    controls.autoRotate = false;
    controls.target = new THREE.Vector3(0, 0, 0); // Set the target to the center of the scene
    controls.update(); // Update the controls to apply the target

    const groundGeometry = new THREE.CircleGeometry(5, 64); // Radius 5, 64 segments for smoothness
    groundGeometry.rotateX(-Math.PI / 2); // Rotate to be horizontal
    const groundMaterial = new THREE.MeshStandardMaterial({
      color: 0xe7222e,
      side: THREE.DoubleSide,
      roughness: 0.5,
      metalness: 0.1,
    });
    // const groundMesh = new THREE.Mesh(groundGeometry, groundMaterial);
    // groundMesh.castShadow = false;
    // groundMesh.receiveShadow = true;
    // groundMesh.position.set(0, -3, 0); // Keep at y = 0
    // scene.add(groundMesh);

    // Enhanced spotlight setup
    const spotlight = new THREE.SpotLight(0xffffff, 15); // Increase intensity for brighter light
    spotlight.position.set(5, 10, 5);
    // spotlight.target = groundMesh;
    spotlight.angle = Math.PI / 4; // Widen the angle for a larger spotlight (45 degrees)
    spotlight.penumbra = 0.5; // Softer edges for a more natural look
    spotlight.distance = 20; // Ensure the light reaches the ground
    spotlight.castShadow = true;
    spotlight.shadow.mapSize.width = 1024;
    spotlight.shadow.mapSize.height = 1024;
    spotlight.shadow.camera.near = 1;
    spotlight.shadow.camera.far = 20;
    spotlight.shadow.camera.fov = 45;
    scene.add(spotlight);

    // Directional light (optional, for additional lighting)
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 25, 0); // Position the light above the scene
    scene.add(light);

    // Ambient light to softly illuminate the scene
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    let mixer; // Animation mixer for the model
    let actions = []; // Store animation actions
    const loader = new GLTFLoader();
    loader.load(
      '/Assembled V8 Engine with Disassemble Animation 3 seconds.glb',
      (gltf) => {
        const mesh = gltf.scene;
        mesh.scale.set(0.6, 0.6, 0.6); // Scale the model down
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

        // Adjust position based on bounding box
        const box = new THREE.Box3().setFromObject(mesh);
        const size = new THREE.Vector3();
        box.getSize(size);
        const height = size.y;
        mesh.position.y = height / 2;

        // Set up animations
        if (gltf.animations && gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(mesh);
          gltf.animations.forEach((clip) => {
            const action = mixer.clipAction(clip);
            action.setLoop(THREE.LoopOnce); // Play once; change to THREE.LoopRepeat for looping
            action.clampWhenFinished = true; // Stop at the last frame
            actions.push(action);
          });
        }
      }
    );

    // Click event to play animations
    const handleClick = () => {
      if (actions.length > 0) {
        actions.forEach((action) => {
          action.reset().play(); // Reset and play each animation
        });
      }
    };
    renderer.domElement.addEventListener('click', handleClick);

    // Clock for animation updates
    const clock = new THREE.Clock();

    // Animation loop
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      if (mixer) mixer.update(delta); // Update animations
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (currentMount) {
        const width = currentMount.clientWidth;
        const height = currentMount.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);

      // scene.remove(groundMesh);
      groundGeometry.dispose();
      groundMaterial.dispose();

      scene.remove(light);
      light.dispose(); // Directional lights might not have a dispose method, but good practice for others

      scene.remove(ambientLight);
      ambientLight.dispose();

      // Dispose of all children in the scene if any were added dynamically
      while (scene.children.length > 0) {
        scene.remove(scene.children[0]);
      }

      renderer.dispose(); // Dispose the renderer

      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement); // Remove canvas from DOM
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once on mount and cleans up on unmount

  return (
    <MainWrapper>
      <Separator>
        <LightBlueDiv />
        <DarkBlueDiv />
      </Separator>
      {/* <StyledHeader>
        <h1>Engine</h1>
      </StyledHeader> */}

      <CanvasContainer ref={mountRef} />
    </MainWrapper>
  );
}

// Styled component for the Three.js canvas container
const CanvasContainer = styled.div`
  width: 100%;
  height: calc(100%);
  margin-left: 20%;
  z-index: 11; /* Ensure it's below the header */
`;

const DIV = styled.div`
  background-color: #81c4ff;
  width: 100px;
  height: 100px;
  /* transform: translateY(50%); // This might push it off-screen or overlap */
  position: absolute; /* Example positioning */
  bottom: 20px;
  left: 20px;
  z-index: 5; /* Ensure it's visible if canvas is full screen */
`;

const StyledHeader = styled.h1`
  position: relative; /* Changed from absolute to flow with Separator */
  width: 100%; /* Use 100% of parent, not vw */
  display: flex;
  justify-content: center;

  padding-top: 10px; /* Add some space */
  /* Above canvas */

  h1 {
    margin: 0;
    font-size: 57px;
    color: var(
      --textColor
    ); /* Make sure --textColor is defined globally or replace */
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  }
`;
const Separator = styled.div`
  width: 100%;
  margin-bottom: 2.5%;
  position: relative; /* Keep in normal flow */
  z-index: 10; /* Above canvas */
`;
const LightBlueDiv = styled.div`
  background-color: #81c4ff;
  height: 2vh;
  width: 100%;
`;
const DarkBlueDiv = styled.div`
  background-color: #16588e;
  height: 2vh;
  width: 100%;
`;

const MainWrapper = styled.div`
  position: relative;
  overflow: hidden; /* Important if canvas tries to overflow */
  background: radial-gradient(circle, #e7222e 0%, rgba(102, 16, 16, 1) 100%);
  width: 100%;
  height: 100vh;
  /* border-bottom: 1px solid black; */
  text-align: center;
  display: flex; /* Use flexbox for easier layout */
  flex-direction: column; /* Stack children vertically */
  /* align-items: center; // CanvasContainer will take full width */
`;

export default Engine;
