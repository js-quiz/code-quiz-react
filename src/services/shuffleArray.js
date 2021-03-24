import floatToInteger from './floatToInteger';

function shuffleArray(arr, transform = floatToInteger) {
  const shuffled = arr.slice();
  const { length } = shuffled;
  for (let i = length - 1; i > 0; i -= 1) {
    const j = transform(i);
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export default shuffleArray;
