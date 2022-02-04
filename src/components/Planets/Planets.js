import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import texturePlanet from '../../assets/images/planet_emissive.jpeg'


const Planets = () => {
    const base = new THREE.TextureLoader().load(texturePlanet)
    const ref = useRef()
    useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
    return (
        <mesh position={[90, 0, 90]} visible castShadow ref={ref}>
            <directionalLight intensity={0.5} />
            <sphereBufferGeometry attach="geometry" args={[50, 540, 550]} />

            <meshBasicMaterial
                map={base}
                color="white"
            />
        </mesh>
    )
}

export default Planets