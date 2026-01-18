import { JSGPU } from "./JSGPU.js";

const canvas = document.getElementById("game");
const gpu = new JSGPU(canvas, {
  targetFPS: 60,
  minScale: 0.5,
  maxScale: 1.0
});

function gameLoop() {
  if (!gpu.shouldRender()) {
    requestAnimationFrame(gameLoop);
    return;
  }

  gpu.frameStart();

  // updateGameLogic();
  // renderScene(gpu.gl);

  gpu.frameEnd();
  requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
