import crypto from 'crypto';

//createHash() creates a Hash object that can be used to generate hash digests using the specified algorithm.
// The algorithm can be 'sha256', 'sha512', 'md5', etc.
// const hash = crypto.createHash('sha256');
// hash.update('Hello, world!');
// console.log(hash.digest('hex'));

// randomBytes() generates cryptographically strong pseudo-random data. The first argument is the number of bytes to generate.
// The second argument is a callback function that receives the generated buffer.
// crypto.randomBytes(16, (err, buffer) => {
//   if (err) throw err;
//   console.log(buffer.toString('hex'));
// });   

// createCipheriv() creates a Cipher object that can be used to encrypt data using the specified algorithm, key, and IV (initialization vector).
const algorithm = 'aes-256-cbc'; // encryption algorithm
const key = crypto.randomBytes(32); // 256-bit key
const iv = crypto.randomBytes(16); // 128-bit IV

const cipher = crypto.createCipheriv(algorithm, key, iv);
let encrypted = cipher.update('Hello, this is a secret msg!', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log('Encrypted:', encrypted);

// createDecipheriv() creates a Decipher object that can be used to decrypt data using the specified algorithm, key, and IV.
const decipher = crypto.createDecipheriv(algorithm, key, iv);
let decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log('Decrypted:', decrypted); // Hello, world!