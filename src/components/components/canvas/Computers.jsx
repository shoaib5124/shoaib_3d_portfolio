import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ windowWidth}) => {
  const computer = useGLTF("/desktop_pc/scene.gltf")

   const getModelScale = () => {
    if (windowWidth <= 400) return 0.6;
    if (windowWidth <= 600) return 0.75;
    if (windowWidth <= 900) return 0.97;
    return 1.03
  };

  const getModelPosition = () => {
    if (windowWidth <= 400) return [3, -3, -0.5];
    if (windowWidth <= 600) return [2, -2.5, -0.8];
    if (windowWidth <= 900) return [2, -2, -1];
    return [2, -1, -1];
  };
  return (
    <group>
    {/* Hemisphere Light - makes the overall scene brighter */}
    <hemisphereLight 
      intensity={1}  // Adjust brightness (0.5 to 2 is usually good)
      groundColor="black" // Color from below
      skyColor="#ffffff"  // Color from above
    />
    
    {/* Your existing lights */}
    <directionalLight
      position={[5, 40, 7]}
      intensity={8}
      castShadow
    />
    <spotLight
      position={[5, 10, 7]}
      angle={0.3}
      penumbra={0.5}
      intensity={3}
      castShadow
      shadow-mapSize={[1024, 1024]}
    />
    
    <primitive 
      object={computer.scene} 
      scale={getModelScale()}
      position={getModelPosition()}
      rotation={[-0.01, -0.01, -0.16]}
    />
  </group>
  )
}

const ComputerCanvas = () => {

    const [windowWidth, setwindowwidth] = useState(window.innerWidth);
   
    useEffect(()=>{
      const handleResize =()=>{
         setwindowwidth(window.innerWidth);

      }
    
      window.addEventListener('resize',
        handleResize);
         
      return () =>{
        window.removeEventListener('resize',
          handleResize)
      }
    },[])

     const getCameraPosition = () => {
    if (windowWidth <= 400) return [20, 3, 5];
    if (windowWidth <= 600) return [25, 3, 5];
    if (windowWidth <= 900) return [30, 3, 5];
    return [35, 3, 5];
  };

  return (
    <Canvas
   
      frameloop="demand"
      camera={{ 
        position: getCameraPosition(),
        fov: 25,
        near: 0.013,
        far: 1000
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Controls />
        <Computers windowWidth={windowWidth} />
      </Suspense>
    </Canvas>
  )
}

const Controls = () => {
  return (
    <OrbitControls
      enableZoom={false}
      minDistance={5}
      maxDistance={50}
      enableRotate={true}
      // Restrict rotation to only horizontal (Y-axis)
      minPolarAngle={Math.PI/2} // Lock vertical rotation
      maxPolarAngle={Math.PI/2}
    />
  )
}

export default ComputerCanvas  