export default function (fn, ms) {
  // eslint-disable-next-line
  let timer;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, ms);
  };
}
