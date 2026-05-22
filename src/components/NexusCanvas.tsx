import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Play, RotateCcw, AlertCircle, Sparkles } from 'lucide-react';
import { NexusConfig, NexusShapeType } from '../types';

interface NexusCanvasProps {
  config: NexusConfig;
  onConfigChange: (newConfig: Partial<NexusConfig>) => void;
}

export default function NexusCanvas({ config, onConfigChange }: NexusCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // States for interactive logs/telemetry to show actions but avoid system status indicators
  const [clickCount, setClickCount] = useState(0);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;

    // Standard high-quality 3D context setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x05050a, 0.012);

    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 18;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(container.clientWidth, container.clientHeight);

    // Dynamic light rigs
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.2);
    scene.add(ambientLight);

    const getHexColor = (theme: string) => {
      switch (theme) {
        case 'purple': return 0xa855f7;
        case 'emerald': return 0x10b981;
        case 'gold': return 0xf59e0b;
        case 'cyan':
        default: return 0x00f0ff;
      }
    };

    const coreColorHex = getHexColor(config.colorTheme);

    const pointLight = new THREE.PointLight(coreColorHex, 2.5, 50);
    pointLight.position.set(0, 0, 5);
    scene.add(pointLight);

    // Central core setup
    let coreMesh: THREE.Mesh | null = null;
    let coreWire: THREE.LineSegments | null = null;

    if (config.glowingCore) {
      const coreGeo = new THREE.IcosahedronGeometry(2.2, 1);
      const coreMat = new THREE.MeshBasicMaterial({
        color: coreColorHex,
        wireframe: true,
        transparent: true,
        opacity: 0.25,
      });
      coreMesh = new THREE.Mesh(coreGeo, coreMat);
      scene.add(coreMesh);

      const wireGeo = new THREE.IcosahedronGeometry(2.25, 1);
      const wireMat = new THREE.LineBasicMaterial({
        color: coreColorHex,
        transparent: true,
        opacity: 0.6,
      });
      coreWire = new THREE.LineSegments(wireGeo, wireMat);
      scene.add(coreWire);
    }

    // Particle field generation based on selected layout shape
    const particleGeometry = new THREE.BufferGeometry();
    const count = config.particleCount;
    const positions = new Float32Array(count * 3);
    const originalPositions = new Float32Array(count * 3); // For interactive waves
    const randomSpeeds = new Float32Array(count);

    const shape = config.shape;
    for (let i = 0; i < count; i++) {
      let x = 0, y = 0, z = 0;

      if (shape === 'AI_SYNAPSE') {
        // Uniform sphere distribution
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const radius = 6 + Math.random() * 7;

        x = radius * Math.sin(phi) * Math.cos(theta);
        y = radius * Math.sin(phi) * Math.sin(theta);
        z = radius * Math.cos(phi);
      } else if (shape === 'MEDIA_MATRIX') {
        // Flat oscillating audio grid
        x = (Math.random() - 0.5) * 26;
        y = (Math.random() - 0.5) * 14;
        z = (Math.random() - 0.5) * 5;
      } else if (shape === 'GRAVITY_SPIRAL') {
        // Star spiral
        const angle = i * 0.08;
        const dist = 3 + (i / count) * 12 + (Math.random() - 0.5) * 1.5;
        x = Math.cos(angle) * dist;
        y = Math.sin(angle) * dist;
        z = (Math.random() - 0.5) * 2.5;
      }

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      randomSpeeds[i] = 0.2 + Math.random() * 0.8;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Custom circular points shader simulation
    const pMaterial = new THREE.PointsMaterial({
      color: coreColorHex,
      size: 0.16,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(particleGeometry, pMaterial);
    scene.add(particleSystem);

    // Interactive node connection web (Only for Synapse structure)
    let connections: THREE.LineSegments | null = null;
    if (shape === 'AI_SYNAPSE') {
      const linePositions: number[] = [];
      const posAttribute = particleGeometry.getAttribute('position');

      // Sample a subset for lines to prevent high performance cost
      const sampleGap = 11;
      for (let i = 0; i < count; i += sampleGap) {
        const x1 = posAttribute.getX(i);
        const y1 = posAttribute.getY(i);
        const z1 = posAttribute.getZ(i);

        let nearestIdx = -1;
        let nearestDist = 999;

        for (let j = i + sampleGap; j < count; j += sampleGap) {
          const x2 = posAttribute.getX(j);
          const y2 = posAttribute.getY(j);
          const z2 = posAttribute.getZ(j);

          const distance = Math.sqrt((x1-x2)**2 + (y1-y2)**2 + (z1-z2)**2);
          if (distance < 5 && distance < nearestDist) {
            nearestDist = distance;
            nearestIdx = j;
          }
        }

        if (nearestIdx !== -1) {
          linePositions.push(x1, y1, z1);
          linePositions.push(
            posAttribute.getX(nearestIdx),
            posAttribute.getY(nearestIdx),
            posAttribute.getZ(nearestIdx)
          );
        }
      }

      const connectionGeo = new THREE.BufferGeometry();
      connectionGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
      const connectionMat = new THREE.LineBasicMaterial({
        color: coreColorHex,
        transparent: true,
        opacity: 0.2,
      });
      connections = new THREE.LineSegments(connectionGeo, connectionMat);
      scene.add(connections);
    }

    // Touch / Cursor tracking
    let targetX = 0;
    let targetY = 0;
    const mouse = { x: 0, y: 0 };

    const handleMouseMove = (event: MouseEvent) => {
      // Calculate normalized mouse constraints
      const rect = canvas.getBoundingClientRect();
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };

    // Push shockwaves outward on click
    let shockwaveIntensity = 0;
    const handleMouseClick = () => {
      shockwaveIntensity = 3.5;
      setClickCount((prev) => prev + 1);
    };

    window.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('click', handleMouseClick);

    // ResizeObserver based precise stage scaling
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        const height = entry.contentRect.height;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      }
    });

    resizeObserver.observe(container);

    // Main structural animation loop
    let frameId: number;
    let clock = new THREE.Clock();

    const renderLoop = () => {
      const elapsedTime = clock.getElapsedTime();
      const delta = clock.getDelta();

      // Slow orbit camera interpolation towards target mouse coordinates
      targetX += (mouse.x * 5 - targetX) * 0.04;
      targetY += (mouse.y * 3 - targetY) * 0.04;

      particleSystem.rotation.y = elapsedTime * config.rotationSpeed * 0.15;
      particleSystem.rotation.x = elapsedTime * config.rotationSpeed * 0.05;

      if (connections) {
        connections.rotation.y = particleSystem.rotation.y;
        connections.rotation.x = particleSystem.rotation.x;
      }

      scene.rotation.y = targetX * 0.12;
      scene.rotation.x = -targetY * 0.12;

      // Animate core wireframes
      if (coreMesh && coreWire) {
        coreMesh.rotation.y = -elapsedTime * 0.4;
        coreMesh.rotation.x = elapsedTime * 0.25;
        coreWire.rotation.y = -elapsedTime * 0.45;
        coreWire.rotation.x = elapsedTime * 0.22;

        const pulse = 1.0 + Math.sin(elapsedTime * 4) * 0.06;
        coreMesh.scale.set(pulse, pulse, pulse);
        coreWire.scale.set(pulse, pulse, pulse);
      }

      // Shockwave and dynamic physics animation
      const positionsRef = particleGeometry.attributes.position.array as Float32Array;
      if (shockwaveIntensity > 0.01) {
        shockwaveIntensity -= 0.06;
      }

      for (let i = 0; i < count; i++) {
        const i3 = i * 3;

        if (shape === 'MEDIA_MATRIX') {
          // Dynamic scrolling sine wave animation representing sound frequencies
          const rawX = originalPositions[i3];
          const rawY = originalPositions[i3 + 1];
          const oscillation = Math.sin(rawX * 0.2 + elapsedTime * 2.5 * randomSpeeds[i]) * 1.8;
          positionsRef[i3 + 1] = rawY + oscillation;
        } else if (shape === 'GRAVITY_SPIRAL') {
          // Spiral expansion and inward drift variables
          const rawX = originalPositions[i3];
          const rawY = originalPositions[i3 + 1];
          const radius = Math.sqrt(rawX * rawX + rawY * rawY);
          const curAngle = Math.atan2(rawY, rawX) + elapsedTime * 0.12 * randomSpeeds[i];
          
          let shockExpansion = 1.0;
          if (shockwaveIntensity > 0) {
            shockExpansion = 1.0 + (shockwaveIntensity * Math.sin(radius * 0.5 - elapsedTime * 4)) * 0.15;
          }

          positionsRef[i3] = Math.cos(curAngle) * radius * shockExpansion;
          positionsRef[i3 + 1] = Math.sin(curAngle) * radius * shockExpansion;
        } else if (shape === 'AI_SYNAPSE') {
          // Abstract floating orbital hover
          const orbitOffset = Math.sin(elapsedTime + i) * 0.15 * randomSpeeds[i];
          positionsRef[i3] = originalPositions[i3] + orbitOffset;
          positionsRef[i3 + 1] = originalPositions[i3 + 1] + Math.cos(elapsedTime * 0.5 + i) * 0.15 * randomSpeeds[i];
          positionsRef[i3 + 2] = originalPositions[i3 + 2] + Math.sin(elapsedTime * 0.8 + i) * 0.12 * randomSpeeds[i];

          if (shockwaveIntensity > 0) {
            const curX = positionsRef[i3];
            const curY = positionsRef[i3 + 1];
            const curZ = positionsRef[i3 + 2];
            const distToCenter = Math.sqrt(curX*curX + curY*curY + curZ*curZ);
            const expandFactor = 1.0 + (shockwaveIntensity / (distToCenter * 0.45 + 1.0)) * 0.4;
            positionsRef[i3] = originalPositions[i3] * expandFactor;
            positionsRef[i3 + 1] = originalPositions[i3 + 1] * expandFactor;
            positionsRef[i3 + 2] = originalPositions[i3 + 2] * expandFactor;
          }
        }
      }

      particleGeometry.attributes.position.needsUpdate = true;

      // Pulse PointLight range
      pointLight.intensity = 2.0 + Math.sin(elapsedTime * 5.0) * 0.7;

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(renderLoop);
    };

    frameId = requestAnimationFrame(renderLoop);

    // Cleanup resources strictly
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('click', handleMouseClick);
      resizeObserver.disconnect();
      particleGeometry.dispose();
      pMaterial.dispose();
      ambientLight.dispose();
      pointLight.dispose();
      if (coreMesh) {
        coreMesh.geometry.dispose();
        (coreMesh.material as THREE.Material).dispose();
      }
      if (coreWire) {
        coreWire.geometry.dispose();
        (coreWire.material as THREE.Material).dispose();
      }
      if (connections) {
        connections.geometry.dispose();
        (connections.material as THREE.Material).dispose();
      }
      renderer.dispose();
    };
  }, [config]);

  return (
    <div ref={containerRef} className="relative w-full h-full min-h-[460px] md:min-h-[560px] cursor-grab active:cursor-grabbing rounded-2xl overflow-hidden shadow-2xl bg-neutral-950/40 border border-neutral-800/40 backdrop-blur-md">
      
      {/* Absolute overlay visual stats - Clean & Humble - NO Port/Network indicators */}
      <div className="absolute top-4 left-4 z-10 font-mono text-xs text-neutral-400 bg-neutral-950/75 px-3 py-1.5 rounded-md border border-neutral-800 backdrop-blur-sm pointer-events-none select-none flex items-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
        <span>3D Scene: </span>
        <span className="text-cyan-400 font-bold">{config.shape.replace('_', ' ')}</span>
      </div>

      <div className="absolute top-4 right-4 z-10 font-mono text-xs text-slate-300 bg-white/5 px-4 py-1.5 rounded-xl border border-white/10 backdrop-blur-md pointer-events-none select-none">
        <span>Nodes: </span>
        <span className="text-white font-bold">{config.particleCount}</span>
      </div>

      {clickCount > 0 && (
        <div className="absolute bottom-4 left-4 z-10 font-mono text-[10px] text-slate-400 bg-white/5 px-3 py-1 rounded-xl border border-white/10 pointer-events-none backdrop-blur-md">
          Shockwaves triggered: {clickCount}
        </div>
      )}

      {/* Actual 3D WebGL Canvas */}
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* 3D Sandbox Controls Floating Panel */}
      <div className="absolute bottom-4 right-4 left-4 sm:left-auto sm:right-4 max-w-sm z-10 bg-white/5 border border-white/10 rounded-2xl p-4 shadow-2xl backdrop-blur-2xl transition-all duration-305">
        <div className="flex items-center justify-between gap-4 mb-3 border-b border-white/5 pb-2">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-indigo-400 animate-ping" />
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white font-sans">
              Dynamic Nexus Sandbox
            </h4>
          </div>
          <button
            onClick={() => onConfigChange({
              shape: 'AI_SYNAPSE',
              particleCount: 500,
              rotationSpeed: 0.6,
              colorTheme: 'cyan',
              glowingCore: true
            })}
            title="Reset to Synapse Defaults"
            className="text-slate-400 hover:text-indigo-400 p-1 rounded-xl hover:bg-white/5 transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Shape Preset Toggles */}
        <div className="mb-3">
          <span className="text-[10px] font-mono text-slate-400 block mb-1.5 uppercase">Geometric Architecture</span>
          <div className="grid grid-cols-3 gap-1.5">
            {(['AI_SYNAPSE', 'MEDIA_MATRIX', 'GRAVITY_SPIRAL'] as NexusShapeType[]).map((shapeVal) => (
              <button
                key={shapeVal}
                onClick={() => onConfigChange({ shape: shapeVal })}
                className={`text-[10px] font-mono py-1 px-1 rounded-lg border text-center transition-all ${
                  config.shape === shapeVal
                    ? 'bg-white/10 border-indigo-500 text-white font-bold'
                    : 'bg-white/5 border-white/5 hover:border-white/10 text-slate-300'
                }`}
              >
                {shapeVal === 'AI_SYNAPSE' && 'Synapse'}
                {shapeVal === 'MEDIA_MATRIX' && 'Matrix'}
                {shapeVal === 'GRAVITY_SPIRAL' && 'Spiral'}
              </button>
            ))}
          </div>
        </div>

        {/* Double Column Sliders */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
              <span>Points</span>
              <span className="text-indigo-300">{config.particleCount}</span>
            </div>
            <input
              type="range"
              min="200"
              max="1500"
              step="50"
              value={config.particleCount}
              onChange={(e) => onConfigChange({ particleCount: parseInt(e.target.value) })}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>

          <div>
            <div className="flex justify-between text-[10px] font-mono text-slate-400 mb-1">
              <span>Speed Factor</span>
              <span className="text-indigo-300">{config.rotationSpeed.toFixed(1)}x</span>
            </div>
            <input
              type="range"
              min="0.1"
              max="2.5"
              step="0.1"
              value={config.rotationSpeed}
              onChange={(e) => onConfigChange({ rotationSpeed: parseFloat(e.target.value) })}
              className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-indigo-500"
            />
          </div>
        </div>

        {/* Color Palette & Core Toggle */}
        <div className="flex items-center justify-between gap-4 border-t border-white/5 pt-2.5">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono text-slate-400 uppercase">Colors</span>
            <div className="flex gap-1.5">
              {(['cyan', 'purple', 'emerald', 'gold'] as Array<'cyan'|'purple'|'emerald'|'gold'>).map((t) => {
                const colorBg = {
                  cyan: 'bg-cyan-400',
                  purple: 'bg-purple-500',
                  emerald: 'bg-emerald-500',
                  gold: 'bg-amber-400',
                }[t];
                return (
                  <button
                    key={t}
                    onClick={() => onConfigChange({ colorTheme: t })}
                    className={`w-3.5 h-3.5 rounded-full ${colorBg} border transition-all ${
                      config.colorTheme === t
                        ? 'ring-2 ring-indigo-300 scale-110 border-white/5'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                    title={`${t.toUpperCase()} Theme`}
                  />
                );
              })}
            </div>
          </div>

          <label className="flex items-center gap-1.5 cursor-pointer text-slate-400 hover:text-slate-205">
            <input
              type="checkbox"
              checked={config.glowingCore}
              onChange={(e) => onConfigChange({ glowingCore: e.target.checked })}
              className="rounded bg-white/5 border-white/10 text-indigo-400 focus:ring-0 focus:ring-offset-0 w-3 h-3 cursor-pointer"
            />
            <span className="text-[10px] font-mono uppercase select-none font-light">Core Rig</span>
          </label>
        </div>

        {/* Humble Interactive Click Hint */}
        <p className="text-[9px] font-mono text-slate-500 text-center mt-2 pt-1.5 border-t border-white/5 leading-tight font-light">
          💡 Click directly on space to trigger cosmic shockwaves. Drag orbit to move vector angles.
        </p>
      </div>
    </div>
  );
}
