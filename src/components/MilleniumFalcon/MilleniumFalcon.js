
import React from 'react'
// import { useFrame } from 'react-three-fiber'
import * as THREE from "three";
import MilleniumFalconShip from '../../assets/models/Halcon_Milenario.obj'
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";



THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const MilleniumFalcon = () => {

    const materials = useLoader(MTLLoader, MilleniumFalconShip);
    const obj = useLoader(OBJLoader, MilleniumFalconShip, (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });


    return <primitive object={obj} scale={0.005} position={[-100, 50, 50]} />;
};

export default MilleniumFalcon
