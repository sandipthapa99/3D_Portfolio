/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import CanvasLoader from "../Loader";
import { OrbitControls, useGLTF } from "@react-three/drei";

const Earth = () => {
  const earth = useGLTF("./earth/scene.gltf");
  return (
    <mesh>
      <hemisphereLight intensity={3} groundColor="black" />
      <primitive
        object={earth.scene}
        scale={10}
        position-y={0}
        rotation-y={0}
      />
    </mesh>
  );
};

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameloop="demand"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate enableZoom={false} />
        <Earth />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
