const fs =  require('node:fs');
const path = require('node:path')

// path.join('..','/new.txt')

const lyricsBuffer = fs.readFileSync('lyrics-reader.txt',{encoding:'utf-8'})

lyricsBuffer.split('\n')



