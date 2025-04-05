const generateRandomNum = require('./utils') // common Js
import getPosts, { getPostsLength } from './postController';
console.log(`random num; ${generateRandomNum()}`);
console.log(getPosts());
console.log(getPostsLength);