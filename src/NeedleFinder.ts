const findNeedle = (input: string[]): string => {
  if (!input.includes('needle')) return 'no needle found';

  if (input.indexOf('needle') !== input.lastIndexOf('needle')) return 'error';

  const position = input.indexOf('needle');

  return `found the needle at position ${position}`;
};

export default findNeedle;
