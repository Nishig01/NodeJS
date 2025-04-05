import os from 'os';

// userInfo()
const userInfo = os.userInfo();
console.log('userInfo:', userInfo);
// Output: { uid: 1000, gid: 1000, username: 'user', homedir: '/home/user', shell: '/bin/bash' }

//totslmem()
const totalMemory = os.totalmem();
console.log('Total Memory:', totalMemory);

//freemem()
const freeMemory = os.freemem();
console.log('Free Memory:', freeMemory);

//cpus()
const cpus = os.cpus();
console.log('CPUs:', cpus);