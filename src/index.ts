function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
export function zeroCrossings(values: readonly number[]): number[] {
  if (!Array.isArray(values) || values.length > 1000000) throw new RangeError('Sample budget');
  let sign = 0;
  const out: number[] = [];
  for (let i = 0; i < values.length; i++) {
    finite(values[i]!, -1e6, 1e6);
    const next = Math.sign(values[i]!);
    if (next) {
      if (sign && next !== sign) out.push(i);
      sign = next;
    }
  }
  return out;
}
