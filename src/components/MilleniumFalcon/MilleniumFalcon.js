
// import React from 'react'
// // import { useFrame } from 'react-three-fiber'
// import * as THREE from "three";
// import tieFighter from '../../assets/models/tie-fighter.obj'
// import { useLoader } from "@react-three/fiber";
// import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
// import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
// import { DDSLoader } from "three-stdlib";


// THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

// const MilleniumFalcon = () => {

//     const materials = useLoader(MTLLoader, tieFighter);
//     const obj = useLoader(OBJLoader, tieFighter, (loader) => {
//         materials.preload();
//         loader.setMaterials(materials);
//     });


//     return <primitive object={obj} scale={0.03} position={[-100, 0, 0]} />;
// };

// export default MilleniumFalcon

import * as THREE from "three";
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";

import TieFighter from '../../assets/models/tie-fighter.obj'
THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const TieFighterModel = () => {
    const materials = useLoader(MTLLoader, TieFighter);
    const obj = useLoader(OBJLoader, TieFighter, (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });

    console.log(obj);
    return <primitive object={obj} scale={0.4} />;
};

export default TieFighterModel