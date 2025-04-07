"use client";

import { useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Center, Float, Text } from '@react-three/drei';
import * as THREE from 'three';

function SkillNode({ position, skill, level }: { position: [number, number, number], skill: string, level: number }) {
  const [hovered, setHovered] = useState(false);
  const textRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (textRef.current) {
      textRef.current.lookAt(state.camera.position);
    }
  });

  return (
    <group position={position}>
      <group ref={textRef}>
        <Text
          position={[0, 0, 0]}
          fontSize={0.2}
          color={hovered ? "#ff6b6b" : "#ffffff"}
          anchorX="center"
          anchorY="middle"
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
        >
          {skill}
        </Text>
      </group>
    </group>
  );
}

function RotatingSkills({ skills }: { skills: Array<{ name: string, level: number }> }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={groupRef}>
      {skills.map((skill, index) => {
        const angle = (index / skills.length) * Math.PI * 2;
        const radius = 3.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        return (
          <SkillNode
            key={skill.name}
            position={[x, 0, z]}
            skill={skill.name}
            level={skill.level}
          />
        );
      })}
    </group>
  );
}

function ResumeVisualization() {
  const skills = [
    { name: "JavaScript", level: 0.8 },
    { name: "React", level: 0.9 },
    { name: "Node.js", level: 0.7 },
    { name: "TypeScript", level: 0.8 },
    { name: "Python", level: 0.6 },
    { name: "SQL", level: 0.7 },
    { name: "HTML5", level: 0.9 },
    { name: "CSS3", level: 0.9 },
    { name: "Next.js", level: 0.8 },
    { name: "Express", level: 0.7 },
    { name: "MongoDB", level: 0.6 },
    { name: "Git", level: 0.8 },
    { name: "Docker", level: 0.5 },
    { name: "AWS", level: 0.4 },
    { name: "GraphQL", level: 0.6 },
    { name: "Redux", level: 0.7 },
    { name: "Jest", level: 0.6 },
    { name: "SASS", level: 0.7 },
    { name: "Webpack", level: 0.5 },
    { name: "REST API", level: 0.8 },
  ];

  return (
    <div className="w-full h-[500px] bg-black rounded-lg overflow-hidden">
      <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
        <color attach="background" args={['#000000']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight
          position={[-10, 10, 10]}
          angle={0.15}
          penumbra={1}
          intensity={1}
        />
        
        <Center>
          <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Text
              fontSize={0.5}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
            >
              Skills
            </Text>
          </Float>
        </Center>

        <RotatingSkills skills={skills} />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
}

export default ResumeVisualization; 