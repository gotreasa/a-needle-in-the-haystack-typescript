const hasNoNeedle = (input: string[]): boolean => {
  return !input.includes('needle');
};

const findNeedle = (input: string[]): string => {
  if (hasNoNeedle(input)) return 'no needle found';

  if (input.indexOf('needle') !== input.lastIndexOf('needle')) return 'error';

  const position = input.indexOf('needle');

  return `found the needle at position ${position}`;
};

export default findNeedle;
