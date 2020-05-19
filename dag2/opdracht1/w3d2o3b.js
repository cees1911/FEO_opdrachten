const testNum = num => {
    return new Promise((resolve, reject) => {
      if (num > 10) {
        resolve(num + ' is greater than 10');
      } else {
        reject(num + ' is less than 10');
      }
    });
  };
  
  testNum(9)
    .then(result => console.log(result))
    .catch(error => console.log(error));
  
  testNum(11)
    .then(result => console.log(result))
    .catch(error => console.log(error));