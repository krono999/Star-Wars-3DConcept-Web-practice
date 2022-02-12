import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import texturePlanet from '../../assets/images/texture.png'


const Planet = () => {
    const base = new THREE.TextureLoader().load(texturePlanet)
    const ref = useRef()
    useFrame(() => (ref.current.rotation.x += 0.002));
    return (
        <mesh position={[200, 5, -800]} visible castShadow ref={ref}>
            <directionalLight intensity={0.5} />
            <sphereBufferGeometry attach="geometry" args={[50, 50, 50]} />

            <meshBasicMaterial
                map={base}
                color="white"
            />
        </mesh>
    )
}

export default Planet