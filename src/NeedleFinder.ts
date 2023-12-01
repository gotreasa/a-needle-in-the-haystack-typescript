const findNeedle = (input: string[]): string => {
  if (JSON.stringify(input) === JSON.stringify(['needle']))
    return 'found the needle at position 0';

  return 'no needle found';
};

export default findNeedle;
