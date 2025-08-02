import React from 'react'
import {Html, useProgress} from '@react-three/drei';
const Loader = () => {
  const {progress} = useProgress();
  return (
    <Html center>
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <div style={{ 
      width: 50, 
      height: 50, 
      border: '3px solid #f1f1f1', 
      borderTopColor: 'transparent',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite',
      marginBottom: 10
    }}/>
    {progress.toFixed(2)}%
  </div>
</Html>
  )
}

export default Loader