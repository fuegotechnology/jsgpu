# JSGPU ⚡  
**Client-Side GPU Optimization Layer for HTML & WebGL Games**

JSGPU is a lightweight JavaScript optimization layer designed to improve performance in WebGL-based HTML games by reducing CPU overhead, stabilizing frame pacing, and making more efficient use of the browser’s GPU pipeline.

JSGPU does not bypass browser security or sandboxing. Instead, it focuses on optimizing how graphics and rendering workloads are handled within standard web APIs.

---

## Overview

Modern browsers already use GPU acceleration, but inefficient rendering patterns can severely impact performance. JSGPU provides a structured way to apply proven optimization techniques commonly used in high-performance WebGL engines and game ports.

The goal of JSGPU is to improve smoothness, reduce stutter, and increase playability on lower-end or restricted devices such as school-managed laptops.

---

## Features

### High-Performance GPU Mode
JSGPU initializes WebGL in high-performance mode and disables unnecessary rendering features that can negatively impact frame time.

### Dynamic Resolution Scaling
The internal rendering resolution automatically adjusts based on real-time performance. When frame rate drops, resolution is reduced to maintain smooth gameplay. When performance improves, resolution scales back up.

### Render Throttling
Rendering is limited to a target frame rate to prevent excessive CPU usage, reduce thermal throttling, and maintain consistent frame pacing.

### WebGL State Caching
JSGPU minimizes redundant WebGL state changes such as buffer binds, program switches, and texture updates. This significantly reduces CPU-to-GPU overhead.

### Worker Coordination
JSGPU provides a structure for offloading heavy computations, such as chunk meshing or geometry generation, to background threads using Web Workers.

---

## Why JSGPU Exists

Many HTML games suffer from performance issues not because of GPU limitations, but due to:
- Over-rendering
- Excessive state changes
- Main-thread blocking
- High internal render resolution
- Garbage collection spikes

JSGPU addresses these issues by applying best-practice optimizations in a reusable and engine-agnostic way.

---

## Ideal Use Cases

- WebGL voxel or block-based games  
- Browser ports of desktop games  
- TeaVM or WebAssembly-based engines  
- Performance-sensitive HTML games  
- Projects similar to Eaglercraft
- Play games on low end devices like ChromeBooks.

---

## Limitations

JSGPU does not:
- Enable native OpenGL, Vulkan, or DirectX
- Bypass browser security restrictions
- Inject shaders or modify GPU drivers
- Provide artificial or unsafe FPS boosts

All optimizations operate within standard browser capabilities.

---

## Expected Performance Improvements

Actual gains depend on hardware and engine design, but typical improvements include:
- Smoother frame pacing
- Reduced stutter during heavy scenes
- Lower CPU usage
- Improved playability on low-end devices

---

## Roadmap

Planned additions include:
- Dedicated worker templates for chunk meshing
- Built-in performance profiling tools
- Occlusion culling helpers
- Engine-specific integration guides

---

## License

This project is liscensed under the GNU General Public License v3.0


---

## About Fuego Technology

JSGPU is developed by **Fuego Technology** with a focus on pushing the browser to their practical performance limits using client-side technologies. For more info, check out https://github.com/fuegotechnology/about
