let timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('1 sec');
  }, 1000);
})