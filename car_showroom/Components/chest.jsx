import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';

export function Chest(props) {
  const { nodes, materials } = useGLTF('/labs5final.glb');
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={nodes.Cylinder.material}
        position={[0, 0.546, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={nodes.Cube.material}
        position={[-0.091, 0.214, -0.94]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[-0.037, 1.043, -0.755]}
        rotation={[0.512, 0.005, -0.011]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[-0.106, 0.225, 0.924]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube006.geometry}
        material={nodes.Cube006.material}
        position={[-0.084, 0.603, 0.906]}
        rotation={[-0.212, -0.008, 0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube007.geometry}
        material={nodes.Cube007.material}
        position={[-0.106, 0.225, 0.924]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube008.geometry}
        material={nodes.Cube008.material}
        position={[-0.098, 0.609, 0.935]}
        rotation={[-0.003, 0.001, 0.006]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube009.geometry}
        material={nodes.Cube009.material}
        position={[-0.04, 0.964, 0.815]}
        rotation={[-0.57, -0.016, -0.002]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube010.geometry}
        material={nodes.Cube010.material}
        position={[-0.027, 1.258, 0.554]}
        rotation={[-0.798, -0.008, -0.023]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube011.geometry}
        material={nodes.Cube011.material}
        position={[0.062, 1.426, 0.226]}
        rotation={[-1.297, 0.001, -0.021]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube012.geometry}
        material={nodes.Cube012.material}
        position={[-0.036, 1.436, -0.176]}
        rotation={[1.529, 0.008, -0.003]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[-0.046, 1.301, -0.502]}
        rotation={[0.999, 0.016, -0.036]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[-0.026, 0.673, -0.898]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[1.278, 0.247, 0.023]}
        rotation={[2.996, -1.548, 2.992]}
        scale={[0.73, 1, 0.999]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube013.geometry}
        material={nodes.Cube013.material}
        position={[-1.261, 0.176, 0.035]}
        rotation={[0.512, -1.559, 0.52]}
        scale={[0.805, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube014.geometry}
        material={nodes.Cube014.material}
        position={[-1.252, 0.842, -0.02]}
        rotation={[1.077, 1.54, 2.083]}
        scale={[-0.775, -1, -1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube015.geometry}
        material={nodes.Cube015.material}
        position={[-1.255, 1.262, 0.012]}
        rotation={[1.077, 1.54, 2.083]}
        scale={[-0.652, -1, -1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube016.geometry}
        material={nodes.Cube016.material}
        position={[1.256, 1.232, 0.054]}
        rotation={[1.077, 1.54, 2.083]}
        scale={[-0.652, -0.972, -1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube017.geometry}
        material={nodes.Cube017.material}
        position={[1.278, 0.839, 0.017]}
        rotation={[-2.018, -1.552, -2.033]}
        scale={[0.724, 1, 0.999]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={nodes.Sphere001.material}
        position={[-1.2, 0.674, -1.011]}
        rotation={[-1.389, -0.067, 0.026]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={nodes.Sphere002.material}
        position={[-1.202, 1, -0.925]}
        rotation={[-1.121, 0.007, -0.133]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003.geometry}
        material={nodes.Sphere003.material}
        position={[-1.193, 1.3, -0.705]}
        rotation={[-0.851, 0.01, -0.205]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere004.geometry}
        material={nodes.Sphere004.material}
        position={[-1.214, 1.517, -0.32]}
        rotation={[-0.297, -0.035, 0.202]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere005.geometry}
        material={nodes.Sphere005.material}
        position={[-1.228, 1.562, 0.158]}
        rotation={[0.222, -0.238, 0.107]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere006.geometry}
        material={nodes.Sphere006.material}
        position={[-1.223, 1.365, 0.625]}
        rotation={[0.694, -0.309, -0.002]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere007.geometry}
        material={nodes.Sphere007.material}
        position={[-1.214, 1.086, 0.889]}
        rotation={[0.997, -0.388, -0.092]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere008.geometry}
        material={nodes.Sphere008.material}
        position={[-1.178, 0.713, 0.996]}
        rotation={[1.231, -0.456, -0.164]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere009.geometry}
        material={nodes.Sphere009.material}
        position={[-1.188, 0.366, 1.01]}
        rotation={[1.44, -0.534, -0.248]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere010.geometry}
        material={nodes.Sphere010.material}
        position={[-1.192, 0.033, 1.033]}
        rotation={[1.44, -0.534, -0.248]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere011.geometry}
        material={nodes.Sphere011.material}
        position={[-1.202, 0.353, -1.027]}
        rotation={[-1.625, 0.021, -0.046]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere012.geometry}
        material={nodes.Sphere012.material}
        position={[-1.193, 0.053, -0.997]}
        rotation={[-1.625, 0.021, -0.046]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere013.geometry}
        material={nodes.Sphere013.material}
        position={[-1.2, 0.674, -1.011]}
        rotation={[-1.389, -0.067, 0.026]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere014.geometry}
        material={nodes.Sphere014.material}
        position={[-1.202, 1, -0.925]}
        rotation={[-1.121, 0.007, -0.133]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere015.geometry}
        material={nodes.Sphere015.material}
        position={[-1.193, 1.3, -0.705]}
        rotation={[-0.851, 0.01, -0.205]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere016.geometry}
        material={nodes.Sphere016.material}
        position={[-1.214, 1.517, -0.32]}
        rotation={[-0.297, -0.035, 0.202]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere017.geometry}
        material={nodes.Sphere017.material}
        position={[-1.228, 1.562, 0.158]}
        rotation={[0.222, -0.238, 0.107]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere018.geometry}
        material={nodes.Sphere018.material}
        position={[-1.223, 1.365, 0.625]}
        rotation={[0.694, -0.309, -0.002]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere019.geometry}
        material={nodes.Sphere019.material}
        position={[-1.214, 1.086, 0.889]}
        rotation={[0.997, -0.388, -0.092]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere020.geometry}
        material={nodes.Sphere020.material}
        position={[-1.178, 0.713, 0.996]}
        rotation={[1.231, -0.456, -0.164]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere021.geometry}
        material={nodes.Sphere021.material}
        position={[-1.188, 0.366, 1.01]}
        rotation={[1.44, -0.534, -0.248]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere022.geometry}
        material={nodes.Sphere022.material}
        position={[-1.192, 0.033, 1.033]}
        rotation={[1.44, -0.534, -0.248]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere023.geometry}
        material={nodes.Sphere023.material}
        position={[-1.202, 0.353, -1.027]}
        rotation={[-1.625, 0.021, -0.046]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere024.geometry}
        material={nodes.Sphere024.material}
        position={[-1.193, 0.053, -0.997]}
        rotation={[-1.625, 0.021, -0.046]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere025.geometry}
        material={nodes.Sphere025.material}
        position={[-1.2, 0.674, -1.011]}
        rotation={[-1.389, -0.067, 0.026]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere026.geometry}
        material={nodes.Sphere026.material}
        position={[-1.202, 1, -0.925]}
        rotation={[-1.121, 0.007, -0.133]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere027.geometry}
        material={nodes.Sphere027.material}
        position={[-1.193, 1.3, -0.705]}
        rotation={[-0.851, 0.01, -0.205]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere028.geometry}
        material={nodes.Sphere028.material}
        position={[-1.214, 1.517, -0.32]}
        rotation={[-0.297, -0.035, 0.202]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere029.geometry}
        material={nodes.Sphere029.material}
        position={[-1.228, 1.562, 0.158]}
        rotation={[0.222, -0.238, 0.107]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere030.geometry}
        material={nodes.Sphere030.material}
        position={[-1.223, 1.365, 0.625]}
        rotation={[0.694, -0.309, -0.002]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere031.geometry}
        material={nodes.Sphere031.material}
        position={[-1.214, 1.086, 0.889]}
        rotation={[0.997, -0.388, -0.092]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere032.geometry}
        material={nodes.Sphere032.material}
        position={[-1.178, 0.713, 0.996]}
        rotation={[1.231, -0.456, -0.164]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere033.geometry}
        material={nodes.Sphere033.material}
        position={[-1.188, 0.366, 1.01]}
        rotation={[1.44, -0.534, -0.248]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere034.geometry}
        material={nodes.Sphere034.material}
        position={[-1.192, 0.033, 1.033]}
        rotation={[1.44, -0.534, -0.248]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere035.geometry}
        material={nodes.Sphere035.material}
        position={[-1.202, 0.353, -1.027]}
        rotation={[-1.625, 0.021, -0.046]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere036.geometry}
        material={nodes.Sphere036.material}
        position={[-1.193, 0.053, -0.997]}
        rotation={[-1.625, 0.021, -0.046]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere037.geometry}
        material={nodes.Sphere037.material}
        position={[-1.2, 0.674, -1.011]}
        rotation={[-1.389, -0.067, 0.026]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere038.geometry}
        material={nodes.Sphere038.material}
        position={[-1.202, 1, -0.925]}
        rotation={[-1.121, 0.007, -0.133]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere039.geometry}
        material={nodes.Sphere039.material}
        position={[-1.193, 1.3, -0.705]}
        rotation={[-0.851, 0.01, -0.205]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere040.geometry}
        material={nodes.Sphere040.material}
        position={[-1.214, 1.517, -0.32]}
        rotation={[-0.297, -0.035, 0.202]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere041.geometry}
        material={nodes.Sphere041.material}
        position={[-1.228, 1.562, 0.158]}
        rotation={[0.222, -0.238, 0.107]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere042.geometry}
        material={nodes.Sphere042.material}
        position={[-1.223, 1.365, 0.625]}
        rotation={[0.694, -0.309, -0.002]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere043.geometry}
        material={nodes.Sphere043.material}
        position={[-1.214, 1.086, 0.889]}
        rotation={[0.997, -0.388, -0.092]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere044.geometry}
        material={nodes.Sphere044.material}
        position={[-1.178, 0.713, 0.996]}
        rotation={[1.231, -0.456, -0.164]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere045.geometry}
        material={nodes.Sphere045.material}
        position={[-1.188, 0.366, 1.01]}
        rotation={[1.44, -0.534, -0.248]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere046.geometry}
        material={nodes.Sphere046.material}
        position={[-1.192, 0.033, 1.033]}
        rotation={[1.44, -0.534, -0.248]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere047.geometry}
        material={nodes.Sphere047.material}
        position={[-1.202, 0.353, -1.027]}
        rotation={[-1.625, 0.021, -0.046]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere048.geometry}
        material={nodes.Sphere048.material}
        position={[-1.193, 0.053, -0.997]}
        rotation={[-1.625, 0.021, -0.046]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere049.geometry}
        material={nodes.Sphere049.material}
        position={[-0.417, 0.674, -1.011]}
        rotation={[-1.389, -0.067, 0.026]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere050.geometry}
        material={nodes.Sphere050.material}
        position={[-0.418, 1, -0.925]}
        rotation={[-1.121, 0.007, -0.133]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere051.geometry}
        material={nodes.Sphere051.material}
        position={[-0.409, 1.3, -0.705]}
        rotation={[-0.851, 0.01, -0.205]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere052.geometry}
        material={nodes.Sphere052.material}
        position={[-0.431, 1.517, -0.32]}
        rotation={[-0.297, -0.035, 0.202]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere053.geometry}
        material={nodes.Sphere053.material}
        position={[-0.444, 1.562, 0.158]}
        rotation={[0.222, -0.238, 0.107]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere054.geometry}
        material={nodes.Sphere054.material}
        position={[-0.439, 1.365, 0.625]}
        rotation={[0.694, -0.309, -0.002]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere055.geometry}
        material={nodes.Sphere055.material}
        position={[-0.431, 1.086, 0.889]}
        rotation={[0.997, -0.388, -0.092]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere056.geometry}
        material={nodes.Sphere056.material}
        position={[-0.395, 0.713, 0.996]}
        rotation={[1.231, -0.456, -0.164]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere057.geometry}
        material={nodes.Sphere057.material}
        position={[-0.405, 0.366, 1.01]}
        rotation={[1.44, -0.534, -0.248]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere058.geometry}
        material={nodes.Sphere058.material}
        position={[-0.409, 0.033, 1.033]}
        rotation={[1.44, -0.534, -0.248]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere059.geometry}
        material={nodes.Sphere059.material}
        position={[-0.419, 0.353, -1.027]}
        rotation={[-1.625, 0.021, -0.046]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere060.geometry}
        material={nodes.Sphere060.material}
        position={[-0.409, 0.053, -0.997]}
        rotation={[-1.625, 0.021, -0.046]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere061.geometry}
        material={nodes.Sphere061.material}
        position={[0.411, 0.674, -1.011]}
        rotation={[-1.389, -0.067, 0.026]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere062.geometry}
        material={nodes.Sphere062.material}
        position={[0.41, 1, -0.925]}
        rotation={[-1.121, 0.007, -0.133]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere063.geometry}
        material={nodes.Sphere063.material}
        position={[0.418, 1.3, -0.705]}
        rotation={[-0.851, 0.01, -0.205]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere064.geometry}
        material={nodes.Sphere064.material}
        position={[0.397, 1.517, -0.32]}
        rotation={[-0.297, -0.035, 0.202]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere065.geometry}
        material={nodes.Sphere065.material}
        position={[0.383, 1.562, 0.158]}
        rotation={[0.222, -0.238, 0.107]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere066.geometry}
        material={nodes.Sphere066.material}
        position={[0.388, 1.365, 0.625]}
        rotation={[0.694, -0.309, -0.002]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere067.geometry}
        material={nodes.Sphere067.material}
        position={[0.397, 1.086, 0.889]}
        rotation={[0.997, -0.388, -0.092]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere068.geometry}
        material={nodes.Sphere068.material}
        position={[0.433, 0.713, 0.996]}
        rotation={[1.231, -0.456, -0.164]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere069.geometry}
        material={nodes.Sphere069.material}
        position={[0.423, 0.366, 1.01]}
        rotation={[1.44, -0.534, -0.248]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere070.geometry}
        material={nodes.Sphere070.material}
        position={[0.419, 0.033, 1.033]}
        rotation={[1.44, -0.534, -0.248]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere071.geometry}
        material={nodes.Sphere071.material}
        position={[0.409, 0.353, -1.027]}
        rotation={[-1.625, 0.021, -0.046]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere072.geometry}
        material={nodes.Sphere072.material}
        position={[0.419, 0.053, -0.997]}
        rotation={[-1.625, 0.021, -0.046]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere073.geometry}
        material={nodes.Sphere073.material}
        position={[1.227, 0.674, -1.011]}
        rotation={[-1.389, -0.067, 0.026]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere074.geometry}
        material={nodes.Sphere074.material}
        position={[1.225, 1, -0.925]}
        rotation={[-1.121, 0.007, -0.133]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere075.geometry}
        material={nodes.Sphere075.material}
        position={[1.234, 1.3, -0.705]}
        rotation={[-0.851, 0.01, -0.205]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere076.geometry}
        material={nodes.Sphere076.material}
        position={[1.212, 1.517, -0.32]}
        rotation={[-0.297, -0.035, 0.202]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere077.geometry}
        material={nodes.Sphere077.material}
        position={[1.199, 1.562, 0.158]}
        rotation={[0.222, -0.238, 0.107]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere078.geometry}
        material={nodes.Sphere078.material}
        position={[1.204, 1.365, 0.625]}
        rotation={[0.694, -0.309, -0.002]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere079.geometry}
        material={nodes.Sphere079.material}
        position={[1.212, 1.086, 0.889]}
        rotation={[0.997, -0.388, -0.092]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere080.geometry}
        material={nodes.Sphere080.material}
        position={[1.248, 0.713, 0.996]}
        rotation={[1.231, -0.456, -0.164]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere081.geometry}
        material={nodes.Sphere081.material}
        position={[1.238, 0.366, 1.01]}
        rotation={[1.44, -0.534, -0.248]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere082.geometry}
        material={nodes.Sphere082.material}
        position={[1.234, 0.033, 1.033]}
        rotation={[1.44, -0.534, -0.248]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere083.geometry}
        material={nodes.Sphere083.material}
        position={[1.224, 0.353, -1.027]}
        rotation={[-1.625, 0.021, -0.046]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere084.geometry}
        material={nodes.Sphere084.material}
        position={[1.234, 0.053, -0.997]}
        rotation={[-1.625, 0.021, -0.046]}
        scale={[0.083, 0.057, 0.083]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[-0.001, 0.685, 0.992]}
        rotation={[-1.657, 0.008, -1.571]}
        scale={[0.171, 0.162, 0.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube018.geometry}
        material={nodes.Cube018.material}
        position={[0.02, -0.017, -0.765]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.081, 1, 1.018]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube019.geometry}
        material={nodes.Cube019.material}
        position={[0.062, -0.006, -0.333]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.081, 1, 1.018]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube020.geometry}
        material={nodes.Cube020.material}
        position={[0.017, -0.006, 0.085]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.081, 1, 1.018]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube021.geometry}
        material={nodes.Cube021.material}
        position={[0.01, -0.009, 0.503]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.081, 1, 1.018]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube023.geometry}
        material={nodes.Cube023.material}
        position={[-0.011, 0.041, 0.769]}
        rotation={[-Math.PI, 0, -Math.PI]}
        scale={[1.081, 1, 1.018]}
      />
    </group>
  );
}

useGLTF.preload('/labs5final.glb');
