import { zeroCrossings } from '@lp-labs/zero-crossings';
if (zeroCrossings([1, 0, -1])[0] !== 2) throw new Error('Crossing');
// @ts-expect-error invalid argument must be rejected by declarations
zeroCrossings(['1']);
