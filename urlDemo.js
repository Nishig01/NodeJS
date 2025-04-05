import { log } from 'console';
import url from 'url';

const urlString = 'https://www.google.com/search?q=nodejs#section1';

//URL object
const urlObj = new URL(urlString);
console.log('URL Object:', urlObj);


// formatting the URL
console.log(url.format(urlObj)); // https://www.google.com/search?q=nodejs#section1

//import.meta.url
console.log('import.meta.url:', import.meta.url); // file:///path/to/your/file/urlDemo.js

// fileURLToPath()
// This method converts a file URL to a file path
console.log('url.fileURLToPath:', url.fileURLToPath(import.meta.url)); // /path/to/your/file/urlDemo.js

console.log(urlObj.search);// ?q=nodejs

console.log(urlObj.searchParams); // URLSearchParams { 'q' => 'nodejs' }
const params = new URLSearchParams(urlObj.search);
console.log('URLSearchParams:', params); // URLSearchParams { 'q' => 'nodejs' }


console.log('URLSearchParams.get:', params.get('q')); // nodejs
params.append('limit', '5')
console.log('URLAppend',params ); // URLSearchParams { 'q' => 'nodejs', 'limit' => '5' }

params.delete('limit')
console.log('URLDelete',params ); // URLSearchParams { 'q' => 'nodejs' }