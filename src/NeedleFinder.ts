const hasNoNeedle = (haystack: string[]): boolean =>
  !haystack.includes('needle');

const hasMoreThanOneNeedle = (haystack: string[]): boolean =>
  haystack.indexOf('needle') !== haystack.lastIndexOf('needle');

const findNeedle = (haystack: any[]): string => {
  let message;
  if (hasNoNeedle(haystack)) message = 'no needle found';
  else if (hasMoreThanOneNeedle(haystack))
    message = 'error - there is more than one needle in this haystack';
  else {
    const position = haystack.indexOf('needle');
    message = `found the needle at position ${position}`;
  }

  return message;
};

export default findNeedle;
