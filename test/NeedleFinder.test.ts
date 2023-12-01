import findNeedle from '../src/NeedleFinder';

describe('The Needle Finder', () => {
  test('should say no needle found for input []', () => {
    expect(findNeedle([])).toBe('no needle found');
  });

  test('should say found the needle at position 0 for input ["needle"]', () => {
    expect(findNeedle(['needle'])).toBe('found the needle at position 0');
  });
});
