import { Canvas } from "@react-three/fiber";
import React, { Suspense, useState } from "react";
import Loader from "../components/Loader";
import Island from "../models/island";
import Sky from "../models/Sky";
import Bird from "../models/Bird";
import Plane from "../models/Plane";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState();

  const adjsutIslandForScreenSize = () => {
    let screenscale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenscale = [0.9, 0.9, 0.9];
    } else {
      screenscale = [1, 1, 1];
    }
    return [screenscale, screenPosition, rotation];
  };

  const adjustPlaneforScreenSize = () => {
    let screenscale, screenPosition;

    if (window.innerWidth < 768) {
      screenscale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenscale = [3, 3, 3];
      screenPosition = [0, -3, -4];
    }
    return [screenscale, screenPosition];
  };

  const [islandScale, islandPosition, rotation] = adjsutIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneforScreenSize();

  return (
    <section className="w-full h-screen">
      {
        <div className="absolute top-28 left-0 right-0 z-10 items-center justify-center flex ">
          {currentStage && <HomeInfo currentStage={currentStage} />}
        </div>
      }
      <Canvas
        camera={{ near: 0.1, far: 1000 }}
        className={`${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        } "w-full h-full bg-transparent"`}
      >
        <Suspense fallback={<Loader />}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[1, 1, 1]} intensity={2} />
          <hemisphereLight
            skyColor="#b1e1ff"
            groundColor={"black"}
            intensity={1}
          />
          <Sky isRotating={isRotating} />
          <Bird isRotating={isRotating} />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={rotation}
            isRotating={isRotating}
            setIsRotating={setIsRotating}
            currentStage={currentStage}
            setCurrentStage={setCurrentStage}
          />
          <Plane
            position={planePosition}
            scale={planeScale}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
    </section>
  );
};

export default Home;
