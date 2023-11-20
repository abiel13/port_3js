import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect, useRef } from "react";

import planescene from "../assets/3d/plane.glb";

const Plane = ({ position, scale, rotation, isRotating }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planescene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (isRotating) {
      actions["Take 001"].play();
    } else {
      actions["Take 001"].stop();
    }
  }, [isRotating, actions]);

  return (
    <mesh position={position} scale={scale} ref={ref} rotation={rotation}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;
