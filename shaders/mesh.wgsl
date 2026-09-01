// simple mesh shader that uses camera uniform and a variant example

struct VertexInput {
  @location(0) position: vec3<f32>
}

struct VertexOutput {
  @builtin(position) position: vec4<f32>
};

@vertex
fn vs_main(input: VertexInput) -> VertexOutput {
  var out: VertexOutput;
  out.position = globalCamera.viewProjection * vec4<f32>(input.position, 1.0);
  return out;
}

@fragment
fn fs_main() -> @location(0) vec4<f32> {
  // USE_PICKING can be toggled by variant key - if true we emit a dummy id
  if (USE_PICKING) {
    // encode some fake id in color red channel
    return vec4<f32>(1.0, 0.0, 0.0, 1.0);
  }
  return vec4<f32>(0.6, 0.8, 1.0, 1.0);
}
