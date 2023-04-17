const useDebounce = (callback, delay) => {
  let tiemout;
  return function (...args) {
    clearTimeout(tiemout);
    tiemout = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

export default useDebounce;
