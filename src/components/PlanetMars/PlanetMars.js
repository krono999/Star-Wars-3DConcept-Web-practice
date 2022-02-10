import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import textureMars from '../../assets/images/textureMars.jpg'


const PlanetMars = () => {
    const base = new THREE.TextureLoader().load(textureMars)

    const planet = useRef();
    useFrame(() => (planet.current.rotation.z += 0.002));
    return (
        <mesh ref={planet} position={[200, 10, 300]} visible castShadow >
            <directionalLight intensity={0.5} />
            <sphereBufferGeometry attach="geometry" args={[110, 110, 110]} />

            <meshBasicMaterial
                map={base}
                color="white"
            />
        </mesh>
    )
}

export default PlanetMars