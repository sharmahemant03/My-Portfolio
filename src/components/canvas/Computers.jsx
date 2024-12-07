import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import { Environment } from '@react-three/drei';


const Computers = () => {
    const { scene } = useGLTF('./laptop_and_mouse_gltf/scene.gltf');
  
    return (
      <mesh>
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 10]} intensity={2} />
        <spotLight
          position={[-20, 50, 10]}
          angle={0.3}
          penumbra={1}
          intensity={1.5}
          castShadow
        />
        <primitive
          object={scene}
          scale={0.1}
          position={[0, -2, 0]}
          rotation={[0, Math.PI / 2, 0]}
        />
      </mesh>
    );
  };
  

  const ComputerCanvas = () => {
    return (
      <Canvas
        frameLoop="demand"
        shadows
        camera={{ position: [8, 4, 8], fov: 50 }}  // Adjusted camera position and FOV
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers />
          <Environment preset="warehouse" />
        </Suspense>
        <Preload all />
      </Canvas>
    );
  };
  

export default ComputerCanvas;
