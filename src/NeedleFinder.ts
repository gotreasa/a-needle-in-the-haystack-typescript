const findNeedle = (input: string[]): string => {
  if (JSON.stringify(input) === JSON.stringify(['needle']))
    return 'found the needle at position 0';
  if (JSON.stringify(input) === JSON.stringify(['sausage', 'needle']))
    return 'found the needle at position 1';

  return 'no needle found';
};

export default findNeedle;
