import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('alternating', () => {
  assert.deepEqual(api.zeroCrossings([1, -1, 1, -1]), [1, 2, 3]);
});
test('zero run convention', () => {
  assert.deepEqual(api.zeroCrossings([0, 1, 0, 0, -1, 0, 1]), [4, 6]);
});
test('same sign', () => {
  assert.deepEqual(api.zeroCrossings([1, 0, 2]), []);
});
test('empty and zero', () => {
  assert.deepEqual(api.zeroCrossings([]), []);
  assert.deepEqual(api.zeroCrossings([0, -0]), []);
});
test('input preserved', () => {
  const a = [1, -1];
  api.zeroCrossings(a);
  assert.deepEqual(a, [1, -1]);
});
test('invalid samples', () => {
  assert.throws(() => api.zeroCrossings([1, , 2]));
  assert.throws(() => api.zeroCrossings([NaN]));
  assert.throws(() => api.zeroCrossings('1'));
});
