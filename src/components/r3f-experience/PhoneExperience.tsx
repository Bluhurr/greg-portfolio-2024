"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { Euler, Group, Vector2 } from "three";
import { MathUtils } from "three";
import { Vector3 } from "three";
import { PhoneModel } from "./PhoneModel";
import { Float, Stage } from "@react-three/drei";

const PhoneExperience = () => {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 150], fov: 20 }}
      gl={{ stencil: true }}
    >
      <Phone />
      <mesh>
        <boxGeometry></boxGeometry>
        <meshStandardMaterial></meshStandardMaterial>
      </mesh>
      <ambientLight intensity={1}></ambientLight>
    </Canvas>
  );
};

const Phone = () => {
  const phone = useRef<Group>(null!);
  const v = new Vector3();
  const hScale = 12;
  const vScale = 5;
  //const hScale = 0.005;
  //const vScale = 0.005;
  const initialRot = new Euler(-0.45, -0.45, -0.2);

  // Using useRef to store the mouse position without re-rendering
  const mousePosition = useRef(new Vector2(0, 0));

  useEffect(() => {
    // Event listener to update the mouse position
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current.set(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 - 1
      );
    };

    // Attach the mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useFrame(({ pointer, camera }) => {
    v.copy({ x: mousePosition.current.x, y: mousePosition.current.y, z: 0 });
    v.unproject(camera);
    phone.current.rotation.y = MathUtils.lerp(
      phone.current.rotation.y,
      initialRot.y + v.x * hScale - 0.1,
      0.1
    );
    phone.current.rotation.x = MathUtils.lerp(
      phone.current.rotation.x,
      initialRot.x + -v.y * vScale - 0.2,
      0.1
    );
  });

  return (
    <>
      <Stage
        preset="upfront"
        intensity={7}
        adjustCamera={false}
        shadows={false}
        environment="forest"
        rotation={[0, 0.7, -0.45]}
      >
        <group ref={phone} rotation={initialRot}>
          <Float
            floatingRange={[-0.1, 0.1]}
            speed={3}
            rotationIntensity={0.5}
            floatIntensity={2.75}
          >
            <PhoneModel />
          </Float>
        </group>
      </Stage>
    </>
  );
};

export default PhoneExperience;
