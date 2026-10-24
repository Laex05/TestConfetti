import { MyParticles } from "./MyParticles";
import { Color } from "./Yuu API/Basic Types/Color";
import { Vector3 } from "./Yuu API/Basic Types/Vector3";
import { inWorldConsole } from "./Yuu API/Console";
import { PlayParticles } from "./Yuu API/Particles/PlayParticles";
import { registerStart } from "./Yuu API/RegisterStart";


registerStart(start);
function start() {
  inWorldConsole.visible(true, new Vector3(0, 1.5, -3.5));

  console.log('Hello World!!!');

  PlayParticles.atPos(Vector3.up, MyParticles.getConfettiParticlesProperties(Color.randomHue()));
  PlayParticles.atPos(Vector3.up, MyParticles.getConfettiParticlesProperties(Color.randomHue()));
  PlayParticles.atPos(Vector3.up, MyParticles.getConfettiParticlesProperties(Color.randomHue()));
  PlayParticles.atPos(Vector3.up, MyParticles.getConfettiParticlesProperties(Color.randomHue()));
  PlayParticles.atPos(Vector3.up, MyParticles.getConfettiParticlesProperties(Color.randomHue()));
  PlayParticles.atPos(Vector3.up, MyParticles.getConfettiParticlesProperties(Color.randomHue()));
  PlayParticles.atPos(Vector3.up, MyParticles.getConfettiParticlesProperties(Color.randomHue()));
  PlayParticles.atPos(Vector3.up, MyParticles.getConfettiParticlesProperties(Color.randomHue()));
}
