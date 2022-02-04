
import React, { useRef } from 'react'
import { useFrame } from 'react-three-fiber'
import * as THREE from "three";
import tie from '../../assets/models/tie.obj'
import { useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
import { DDSLoader } from "three-stdlib";


THREE.DefaultLoadingManager.addHandler(/\.dds$/i, new DDSLoader());

const StarShip = () => {

    const materials = useLoader(MTLLoader, tie);
    const obj = useLoader(OBJLoader, tie, (loader) => {
        materials.preload();
        loader.setMaterials(materials);
    });


    return <primitive object={obj} scale={0.05} position={[-170, -30, -60]} />;
};

export default StarShip