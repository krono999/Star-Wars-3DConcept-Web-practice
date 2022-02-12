
// import React from 'react'
// // import { useFrame } from 'react-three-fiber'
// import * as THREE from "three";
// import MilleniumFalconShip from '../../assets/models/Halcon_Milenario.obj'
// import { useLoader } from "@react-three/fiber";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
// import { DDSLoader } from "three-stdlib";



// THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

// const MilleniumFalcon = () => {

//     const materials = useLoader(MTLLoader, MilleniumFalconShip);
//     const obj = useLoader(OBJLoader, MilleniumFalconShip, (loader) => {
//         materials.preload();
//         loader.setMaterials(materials);
//     });


//     return <primitive object={obj} scale={0.6} position={[-100, -220, -450]} />;
// };

// export default MilleniumFalcon

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import texture from '../../assets/images/texture.jpg'


const MilleniumFalcon = () => {
    const base = new THREE.TextureLoader().load(texture)

    const planet = useRef();
    useFrame(() => (planet.current.rotation.y += 0.002));
    return (
        <mesh ref={planet} position={[-50, -5, -79]} visible castShadow >
            <directionalLight intensity={0.5} />
            <sphereBufferGeometry attach="geometry" args={[20, 20, 20]} />

            <meshBasicMaterial
                map={base}
                color="white"
            />
        </mesh>
    )
}

export default MilleniumFalcon

