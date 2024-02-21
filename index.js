const path = require('node:path')
const generateLyrics = require('./lyrics-gen')
const readline = require('node:readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  readline.question(`input lyrics title:\n`, title => {
    console.log(`the title: ${title}! will be saved as the file name`);
    readline.close();
    // const filename = __dirname+`/${title}`+'.pptx'
    // console.log(path.join(__dirname,'../',`/${title}.pptx`))
    generateLyrics(title)
  });




