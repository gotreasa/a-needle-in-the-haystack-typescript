const hasNoNeedle = (input: string[]): boolean => !input.includes('needle');

const hasMoreThanOneNeedle = (input: string[]): boolean =>
  input.indexOf('needle') !== input.lastIndexOf('needle');

const findNeedle = (input: string[]): string => {
  if (hasNoNeedle(input)) return 'no needle found';

  if (hasMoreThanOneNeedle(input)) return 'error';

  const position = input.indexOf('needle');

  return `found the needle at position ${position}`;
};

export default findNeedle;
