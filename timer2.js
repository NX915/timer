const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

let activeCount = 0;
stdin.on('data', (key) => {
  // \u0003 maps to ctrl+c input
  if (key === 'b') {
    process.stdout.write('Beep\n');
  } else if (Number(key) < 10 && Number(key) > -1) {
    process.stdout.write(`Setting timer for ${key} seconds...\n`);
    activeCount ++;
    setTimeout(() => {
      process.stdout.write(`Beep, ${key} seconds done! `);
      activeCount --;
      if (activeCount > 0) {
        process.stdout.write(`${activeCount} timers still active!\n`);
      } else {
        process.stdout.write(`All timers finished!\n`);
      }
    },Number(key) * 1000);
  } else if (key === '\u0003') {
    process.stdout.write('Thanks for using me, ciao!\n');
    process.exit();
  }
});

// console.log('after callback');