import React, { Suspense, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'

const Computers = ({ isMobile}) => {
  const computer = useGLTF("/desktop_pc/scene.gltf")
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
      intensity={2}
      castShadow
    />
    <spotLight
      position={[10, 15, 10]}
      angle={0.3}
      penumbra={1}
      intensity={50}
      castShadow
      shadow-mapSize={[1024, 1024]}
    />
    
    <primitive 
      object={computer.scene} 
      scale={isMobile ? 0.65 : 1}
      position={isMobile ? [2,-3,-0.5] : [2, -1, -1]}
      rotation={[-0.01, -0.19, -0.16]}
    />
  </group>
  )
}

const ComputerCanvas = () => {
    const [isMobile, setisMobile] = useState(false);
    useEffect(()=>{
      const mediaQuery = window.matchMedia('(max-width:643px)');
  
      setisMobile(mediaQuery.matches);
      
      const handlemediaQueryChange = (event)=>{
        setisMobile(event.matches)
      }
  
      mediaQuery.addEventListener('change',
        handlemediaQueryChange);
         
      return () =>{
        mediaQuery.removeEventListener('change',
          handlemediaQueryChange)
      }
    },[])
  return (
    <Canvas
      frameloop="demand"
      camera={{ 
        position: [30, 0, 5],
        fov: 25,
        near: 0.013,
        far: 1000
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Controls />
        <Computers isMobile={isMobile}  />
      </Suspense>
    </Canvas>
  )
}

const Controls = () => {
  return (
    <OrbitControls
      enableZoom={true}
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