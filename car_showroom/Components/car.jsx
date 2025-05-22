import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Car(props) {
  const { nodes, materials } = useGLTF('/models/BMW M3.glb')
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HOOD.geometry}
        material={materials['Car Paint']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HOOD_VENT.geometry}
        material={materials['Black(carbon)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRONT_HOOD_VENT.geometry}
        material={materials['Chrome (grille)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FENDER.geometry}
        material={materials['Car Paint']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DOOR.geometry}
        material={materials['Car Paint']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAR_QP.geometry}
        material={materials['Car Paint']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SIDE_SKIRT.geometry}
        material={materials['Car Paint']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRUNK.geometry}
        material={materials['Car Paint']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LICENSE.geometry}
        material={materials['Car Paint']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAR_BUMPER.geometry}
        material={materials['Car Paint']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRONT_BUMPER.geometry}
        material={materials['Car Paint']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRONT_GRILLES.geometry}
        material={materials['Chrome (grille)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WINDSHIELD.geometry}
        material={materials.Glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.HOOD_GRILLES.geometry}
        material={materials['Black(carbon)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RIMS.geometry}
        material={materials['Metal (grey)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BACK_RIMS.geometry}
        material={materials['Metal (grey)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RIMS_BOLT.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BACK_RIM_BOLT.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRONT_TIRES.geometry}
        material={materials.Rubber}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BACK_TIRES.geometry}
        material={materials.Rubber}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BREKE_DISK.geometry}
        material={materials['brake disc']}
      />
      <mesh castShadow receiveShadow geometry={nodes.BREAKS.geometry} material={materials.Brembo} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAR_BRAKE_DISK.geometry}
        material={materials['brake disc']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SIDE_VENT_SQUARE.geometry}
        material={materials['Chrome (grille)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SPOILER.geometry}
        material={materials['Black(carbon)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EXAUST.geometry}
        material={materials['Metal (grey)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SIDE_STRIPE.geometry}
        material={materials['Car Paint']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DOOR_HANDLE.geometry}
        material={materials['Car Paint']}
      />
      <mesh castShadow receiveShadow geometry={nodes.BADGE.geometry} material={materials.Logo} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAR_BADGE.geometry}
        material={materials.Logo}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRONT_BUMPER001.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FENDER001.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BACK_WHEEL_ARCH.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WINDOW_FRAME.geometry}
        material={materials.Plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WINDSHIELD_FRAME.geometry}
        material={materials.Plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BACK_WINDOW.geometry}
        material={materials.Glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BACK_WINDOW_BOLTS.geometry}
        material={materials['Metal (grey)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRONT_WHEEL_ARCH.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRONT_WINDOW.geometry}
        material={materials.Glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RW_FRAME.geometry}
        material={materials.Plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAR_WINDSHIELD.geometry}
        material={materials.Glass}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAR_BRAKES.geometry}
        material={materials.Brembo}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRONT_BUMPER003.geometry}
        material={materials['Car Paint']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRONT_BUMPER004.geometry}
        material={materials.Plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle001.geometry}
        material={materials['Chrome (grille)']}
      />
      <mesh castShadow receiveShadow geometry={nodes.Sphere.geometry} material={materials.Lens} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle002.geometry}
        material={materials['Chrome (grille)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle003.geometry}
        material={materials.Emit}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere002.geometry}
        material={materials.Lens}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SVETLA.geometry}
        material={materials['Chrome (grille)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SVETLA_2.geometry}
        material={materials['White striped']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRONT_BUMPER006.geometry}
        material={materials['Glass lights']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAR_LIGHT.geometry}
        material={materials['Glass lights']}
        position={[-0.288, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAR_LIGHT001.geometry}
        material={materials.Plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRUNK001.geometry}
        material={materials['Trunk lights']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TRUNK002.geometry}
        material={materials['Red light']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAR_LIGHTS_3.geometry}
        material={materials.ChromeRed}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRONT_HOOD_VENT001.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAR_WHITE_LIGHT.geometry}
        material={materials['White striped']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['2'].geometry}
        material={materials['Red light striped']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['4'].geometry}
        material={materials['Chrome (grille)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['5'].geometry}
        material={materials['Chrome (grille)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['6'].geometry}
        material={materials['Chrome (grille)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['7'].geometry}
        material={materials['Red light']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['9'].geometry}
        material={materials['red lights striped 2']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['8'].geometry}
        material={materials['Red light']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.MIRROR.geometry}
        material={materials['Car Paint']}
      />
      <mesh castShadow receiveShadow geometry={nodes['11'].geometry} material={materials.EmitRed} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.B_PILLAR.geometry}
        material={materials.Plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.WINDSHIELD_FRAME001.geometry}
        material={materials.Plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRONT_BUMPER007.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRONT_BUMPER008.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FRONT_BUMPER009.geometry}
        material={materials.Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.FUEL_TANK.geometry}
        material={materials.Plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.RIGHT_ANGEL_EYE.geometry}
        material={materials.Emit}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.EXAUST_BOLTS.geometry}
        material={materials['Metal (grey)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LEFT_ANGEL_EYE.geometry}
        material={materials.Emit}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.LICENSE_PLATE.geometry}
        material={materials['License plate']}
      />
      <mesh castShadow receiveShadow geometry={nodes.Plane.geometry} material={materials.Black} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['5001'].geometry}
        material={materials['Chrome (grille)']}
      />
      <mesh castShadow receiveShadow geometry={nodes['10001'].geometry} material={materials.Emit} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.REAR_WHITE_LIGHT001.geometry}
        material={materials['White striped']}
      />
      <mesh castShadow receiveShadow geometry={nodes['10002'].geometry} material={materials.Emit} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.SIDE_VENT_SQUARE001.geometry}
        material={materials['Chrome (grille)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials.Lens}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere003.geometry}
        material={materials.Lens}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.DOOR_HANDLE001.geometry}
        material={materials['Car Paint']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['11001'].geometry}
        material={materials.EmitRed}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.BACK_WINDOW_BOLTS001.geometry}
        material={materials['Metal (grey)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_1.geometry}
        material={materials['Chrome (grille)']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle_2.geometry}
        material={materials.Plastic}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle013.geometry}
        material={materials['Red light striped']}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Circle013_1.geometry}
        material={materials['Red light']}
      />
    </group>
  )
}

useGLTF.preload('/models/BMW M3.glb')
