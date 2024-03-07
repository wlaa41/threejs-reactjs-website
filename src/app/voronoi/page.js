// Relative file path: ./app\voronoi\page.js
'use client';
import Link from 'next/link';
import Title from '../../components/title/Title';
import { Canvas } from '@react-three/fiber';
import Cube from '@/components/object3d/Cube';
import { Stats, OrbitControls } from '@react-three/drei'


const SimulationPage = () => {
  return (
    <div>
      <Title name='Voronoi Page'/>
      <div style={{ height: "100vh" }}>
      <Canvas>
      
        <ambientLight intensity={0.7} /> {/* Reduced intensity for ambient light */}
        <pointLight position={[3, 1, 1]} /> {/* Ensure point light is positioned to affect the cube */}
        <spotLight position={[1, 1, 1]} angle={2} /> {/* Add a spotLight for directional shading */}
        <spotLight position={[1, 1, 1]} angle={2} /> {/* Add a spotLight for directional shading */}
        <spotLight position={[1, 1, 1]} angle={1} /> {/* Add a spotLight for directional shading */}
        <Cube position={[0, 0, 0]} />
        <OrbitControls target={[2, 2, 0]} />

      </Canvas>
    </div>
      <h1>Voronoi Page</h1>
    </div>
  );
};

export default SimulationPage;
