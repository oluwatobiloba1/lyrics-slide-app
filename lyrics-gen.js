const fs =  require('node:fs');
const path = require('node:path')
const pptxgen = require('pptxgenjs')


const lyricsBuffer = fs.readFileSync('lyrics-reader.txt',{encoding:'utf-8'})

const arr = lyricsBuffer.split('\r\n')
console.log(arr)

const pptx = new pptxgen();
pptx.defineSlideMaster({
    title: 'DEFAULT_SLIDE',
    background: {color: '000000'},
    slideNumber:{
        align: 'center',
        fontSize: 42
    }
});

function generateLyrics(fileTitle){
    for (let i = 0; i < arr.length; i=i+2){
        let slide = pptx.addSlide('DEFAULT_SLIDE');
        const groupLyrics = arr.slice(i,i+2)

        const subArray = groupLyrics.map(lyric=>({text:lyric,options:{align:'center', breakLine: true}}))

        slide.addText(subArray,{ x:0, y:0, w:'100%', h:'100%', autoFit: true, bold: true,fontSize: 52,color:'FFFFFF'})
        // slide.addText(arr[i+1],{align:'center',color:'FFFFFF',fontSize: 42, x:0, y:0, w:'100%', h:'100%', autoFit: true, bold: true})
    }

    const filename = path.join(__dirname,'../',`/${fileTitle}.pptx`)
    // console.log(path.join(__dirname,`/${title}.pptx`))
    pptx.writeFile({fileName: filename})
    .then(fileName => {
        console.log(`created file: ${fileName}`);
    });
}

module.exports = generateLyrics;