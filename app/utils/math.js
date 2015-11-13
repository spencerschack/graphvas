const {min, max} = Math;

export function extrema(...args) {
  return [min(...args), max(...args)];
}
