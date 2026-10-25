const test = require('node:test');
const assert = require('node:assert/strict');
const provider = require('../providers/adult-catalog');

test('exports Nuvio getStreams provider function', () => {
  assert.equal(typeof provider.getStreams, 'function');
});

test('placeholder returns an empty stream list without network access', async () => {
  const result = await provider.getStreams('tmdb:123', 'movie');
  assert.deepEqual(result, []);
});
