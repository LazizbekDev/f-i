import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from "@react-three/drei"
import {Model} from "./Model";

function App() {

  return (
    <Canvas>
      <ambientLight intensity={5} />
      <directionalLight position={[0, 100, 0]} intensity={1} castShadow />
      <pointLight position={[-5, 5, -5]} intensity={1} distance={10} castShadow />
      <spotLight position={[0, 10, 0]} angle={Math.PI / 4} penumbra={0.1} intensity={1} castShadow />
      <OrbitControls enableZoom={false} />

      <Suspense fallback={null}>
        <Model />
      </Suspense>
    </Canvas>
  )
}

export default App
