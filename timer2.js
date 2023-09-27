const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


const ask = () => {

      rl.question("\nHow long would you like to set a timer for? \n (1 - 9 seconds, or press 'b' to beep now.) ", (answer) => {

      if (isNaN(parseInt(answer))) {
        console.log("\nSorry, only 'b' or positive integers from 1-9!");
        ask();
      } 
      
      if (answer === 'b'){
        console.log('\x07');
        ask();
      }
      
      if (answer > 0 && answer < 10) {
        console.log(`\nSetting timer for ${answer} seconds...`);
        setTimeout(() => {process.stdout.write('\x07');}, answer * 1000);
        setTimeout(() => ask(), (answer * 1000) + 300);
      }

      if (answer < 0) {
        console.log("\nSorry, only positive integers from 1-9.");
        ask();
      }

      if (answer > 10) {
        console.log("\nSorry, I'm pretty busy and don't have that kind of time.");
        ask();
      }

    }); 
  }
  
  rl.on('SIGINT', () => {
    console.log("\n\nThanks for using me, ciao!");
    rl.close();
});

ask();