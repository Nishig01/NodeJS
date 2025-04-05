// import fs from 'fs';
import fs from 'fs/promises';


//readFile() - callback
// fs.readFile('./test.txt', 'utf-8', (err, data)=>{
//     if(err){
//         console.log('Error:', err);
//         return;
//     }
//     console.log('File content:', data);
// })

// //readFileSync() - synchronous
// try{
//     const data = fs.readFileSync('./test.txt', 'utf-8');
//     console.log('File content sync:', data);
// }
// catch(err){
//     console.log('Error:', err);
// }

// //readFile() - promise .thrn()
fs.readFile('./test.txt', 'utf-8')
.then(data => console.log('File content promise then:', data))
.catch(err => console.log('Error:', err));

// //readFile() - promise -async/await
(async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8');
        console.log('File content promise async:', data);
    } catch (err) {
        console.log('Error:', err);
    }
})();

const readFile=async () => {
    try {
        const data = await fs.readFile('./test.txt', 'utf-8');
        console.log('File content promise async:', data);
    } catch (err) {
        console.log('Error:', err);
    }
};
//Write File()
const writeFile=async () => {   
    try {
        await fs.writeFile('./test.txt', 'Hello World');
        console.log('File written successfully');
    } catch (err) {
        console.log('Error:', err);
    }
}

//appendFile()

const appendFile = async()=>{
    try{
        await fs.appendFile('./test.txt', '\nHello test');
        console.log('File appended successfully');
    } catch(err){
        console.log('Error:', err);
    }
}
writeFile();
appendFile();
readFile();