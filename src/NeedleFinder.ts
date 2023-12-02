const hasNoNeedle = (input: string[]): boolean => !input.includes('needle');

const hasMoreThanOneNeedle = (input: string[]): boolean =>
  input.indexOf('needle') !== input.lastIndexOf('needle');

const findNeedle = (input: any[]): string => {
  let message;
  if (hasNoNeedle(input)) message = 'no needle found';
  else if (hasMoreThanOneNeedle(input)) message = 'error';
  else {
    const position = input.indexOf('needle');
    message = `found the needle at position ${position}`;
  }

  return message;
};

export default findNeedle;
