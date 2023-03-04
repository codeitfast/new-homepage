import * as THREE from 'three'
import { Canvas, useLoader } from "@react-three/fiber"
//import { useThree, useFrame } from "@react-three/fiber";
import { Physics, useBox, usePlane } from '@react-three/cannon'
import { useRef } from "react";
import { LayerMaterial, Depth, Displace, Fresnel } from 'lamina'
import { Displace as DisplaceType } from 'lamina/vanilla'
import { Suspense } from 'react';
import diff from '../images/textures/pavement_02_diff_4k.jpg'
import disp from '../images/textures/pavement_02_disp_4k.png'
function Box(props) {
    // This reference gives us direct access to the THREE.Mesh object
    const [ref] = useBox(() => ({ mass: 1, position: [Math.random()*10, Math.random()*10 + 2, Math.random()*10], ...props }))
    //useFrame((state, delta) => (ref.current.rotation.x += delta))
    //useFrame(({ clock }) => api.position.set(Math.sin(clock.getElapsedTime()) * 5, 0, 0))

    return (
      <mesh
        {...props}
        ref={ref}
        scale={Math.random()}
        castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="white" />
      </mesh>
    )
}


function Ground(props){
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], position: [0,-2,0], ...props }))
    return(
        <mesh ref={ref} receiveShadow>
            <planeGeometry args={[100,100]}/>
            <meshStandardMaterial attach="material" color='white'/>
        </mesh>
    )
}

export default function Part4(){
    let cubes = []
    for(let x = 0; x < 23; x++){
        cubes.push(<Box position={[(Math.random()-.5)*5,(Math.random()-.5)*5,0]} rotation={[Math.random(),Math.random(),Math.random()]}/>)
    }
    return(
        <>
        <div className="flex w-screen h-screen place-content-center justify-center">
        <h1 className="absolute place-self-center text-7xl text-white mx-auto z-50">byee</h1>
            <Canvas className="z-10" shadows>
            <fog attach="fog" args={["black", 0, 40]} />

                <ambientLight intensity={.4} />
                <pointLight position={[1,1,1]} intensity={.3} castShadow/>
                <Physics>
                    <Suspense fallback={null}>
                {cubes.map(box => {
                    return box
                })}
                </Suspense>
                <Suspense fallback={null}>
                <Ground />
                </Suspense>
                </Physics>
            </Canvas>
        </div>
        </>
    )
}