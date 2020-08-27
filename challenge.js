/**
 * Evaluate the input number if the condition is met, return a specific word else return same input
 * @description     if is multiple of 3 return "Music"
 * @description     if is multiple of 5 return "TI"
 * @description     if is multiple of 3 and 5 return "Musical"
 * @param {Number} num
 */
export function replaceByCondition(num) {
  if (isNaN(num))
    throw new Error(`should be a number but enter a ${typeof num}`);
  switch (true) {
    case num % 3 === 0 && num % 5 === 0:
      return "Musical";
    case num % 3 === 0:
      return "Music";
    case num % 5 === 0:
      return "TI";
    default:
      return num;
  }
}
/**
 * Generator to return numbers from 1 to 100
 * @generator
 * @function generateNumber
 * @yields {number} The next number in sequence from 1 to 100
 */
export function* generateNumber() {
  let num = 1;
  while (num < 100) yield num++;
}

/**
 * Iterate the generator and print the result of replaceByCondition function
 */
export function init() {
  const numberGenerator = generateNumber();

  let num = numberGenerator.next();
  do {
    console.log(replaceByCondition(num.value));
    num = numberGenerator.next();
  } while (!num.done);
}
