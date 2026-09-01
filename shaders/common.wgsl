// shared WGSL common code (same as TS module)
struct CameraUniform {
  viewProjection: mat4x4<f32>,
  position: vec3<f32>,
  _pad: f32
}

fn saturate(x: f32) -> f32 { return clamp(x, 0.0, 1.0); }

fn lerp(a: vec3<f32>, b: vec3<f32>, t: f32) -> vec3<f32> {
  return a + (b - a) * t;
}

const PI: f32 = 3.14159265359;

@group(0) @binding(0) var<uniform> globalCamera: CameraUniform;
