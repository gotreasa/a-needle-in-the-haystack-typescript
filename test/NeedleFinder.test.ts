import findNeedle from '../src/NeedleFinder';

describe('The Needle Finder', () => {
  test('should say no needle found for input []', () => {
    expect(findNeedle([])).toBe('no needle found');
  });

  test('should say found the needle at position 0 for input ["needle"]', () => {
    expect(findNeedle(['needle'])).toBe('found the needle at position 0');
  });

  test('should say found the needle at position 1 for input ["sausage", "needle"]', () => {
    expect(findNeedle(['sausage', 'needle'])).toBe(
      'found the needle at position 1',
    );
  });

  test('should say found the needle at position 5 for input ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]', () => {
    expect(
      findNeedle([
        'hay',
        'junk',
        'hay',
        'hay',
        'moreJunk',
        'needle',
        'randomJunk',
      ]),
    ).toBe('found the needle at position 5');
  });

  test("should return 'error' when the input is ['needle', 'needle']", () => {
    expect(findNeedle(['needle', 'needle'])).toBe('error');
  });

  test('should say found the needle at position 1 for input [4, "needle"]', () => {
    expect(findNeedle([4, 'needle'])).toBe('found the needle at position 1');
  });
});
