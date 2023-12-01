import findNeedle from '../src/NeedleFinder';

describe('The Needle Finder', () => {
  test('should say no needle found for input []', () => {
    expect(findNeedle([])).toBe('no needle found');
  });
});
