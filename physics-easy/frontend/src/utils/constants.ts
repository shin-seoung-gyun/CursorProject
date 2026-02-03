// 물리 상수
export const PHYSICS_CONSTANTS = {
  GRAVITY: 9.81, // m/s²
  LIGHT_SPEED: 299792458, // m/s
  PLANCK: 6.62607015e-34, // J⋅s
  BOLTZMANN: 1.380649e-23, // J/K
} as const;

// 앱 설정
export const APP_CONFIG = {
  SIMULATION_FPS: 60,
  DEFAULT_TIME_STEP: 0.01,
} as const;
