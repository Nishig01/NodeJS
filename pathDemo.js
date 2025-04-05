import path from 'path';
import url from 'url';
const filePath = '/home/user/documents/file.txt';

//basename()
const baseName = path.basename(filePath);
console.log(`Base name: ${baseName}`); // Output: file.txt  

//dirname()
const dirName = path.dirname(filePath);
console.log(`Directory name: ${dirName}`); // Output: /home/user/documents

//extname()
console.log(path.extname(filePath)); // Output: .txt

//parse()
console.log(` parse ${path.parse(filePath)}`); // Output: { root: '/', dir: '/home/user/documents', base: 'file.txt', ext: '.txt', name: 'file' }

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(`__filename: ${__filename}, __dirname: ${__dirname}`); // Output: /home/user/documents/pathDemo.js

//join()
const filePath2 = path.join(__dirname, 'dir1', 'dir2', 'test.txt');
console.log(`File path: ${filePath2}`); // Output: /home/user/documents/dir1/dir2/test.txt

//resolve()
const resolvedPath = path.resolve('dir1', 'dir2', 'test.txt');
console.log(`Resolved path: ${resolvedPath}`); // Output: /home/user/documents/dir1/dir2/test.txt