const fs = require('fs');
const readstream = fs.createReadStream('./Docs/blog4.csv', {
    encoding: 'utf8'
});

const writeStream = fs.createWriteStream('./Docs/blog5.txt');


readstream.on('data', (chunk) => {
    console.log('......................new chunk..................');   
    
    console.log(chunk);
 writeStream.write('.............NEW CHUNK..................');
 
    writeStream.write(chunk);
})  

readstream.pipe(writeStream);