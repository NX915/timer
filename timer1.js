const timer = function(inputNumArr = process.argv.slice(2)) {
  for (const ele of inputNumArr) {
    let num = Number(ele);
    if (!Number.isNaN(num) && num >= 0) {
      setTimeout(() => {
        process.stdout.write('\x07');
        process.stdout.write(`\r${num} Seconds Up!\n`);
      }, num * 1000);
    }
  }
};
timer();