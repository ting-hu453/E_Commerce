const useThrottle = (callback, delay) => {
  let timer;
  return function (...args) {
    if (timer) return;
    //callback(...args);
    timer = true;
    setTimeout(() => {
      callback(...args);
      timer = false;
    }, delay);
  };
};

export default useThrottle;
