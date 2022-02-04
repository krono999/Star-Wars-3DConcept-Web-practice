import React from 'react';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';
import { useLoader } from '@react-three/fiber';
import BabyYoda from '../../assets/models/BabyYoda.stl'


const ModelOne = ({ url }) => {
    const geom = useLoader(STLLoader, BabyYoda);


    return (
        <>

            <primitive object={geom} attach="geometry" />

        </>
    );
};

export default ModelOne