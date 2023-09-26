let seconds = process.argv.splice(2)

const alarm = (seconds) => {
  seconds.forEach(each => {

    const tick = parseInt(each)
    
    if(!Number.isInteger(tick) || tick < 0){
      return;
    }

    setTimeout(() => process.stdout.write('\x07'), tick * 1000)
  })
}

alarm(seconds);