import crypto from 'crypto';
import fs from 'fs';
import os from 'os';
const systemInfo = {
    platform: os.platform(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    hostname: os.hostname(),
    tmpdir: os.tmpdir(),
    homedir: os.homedir(),
    userInfo: os.userInfo().username
};
const createHash = crypto.createHash('sha256');
createHash.update(JSON.stringify(systemInfo));
const hashedData = createHash.digest('hex'); 
console.log('암호된 데이터:', hashedData);
fs.writeFile('newFile.txt', hashedData, (err) => {
    if(err){
        console.error('저장 실패..', err);
        return;
    }
    console.log('저장 성공!!');
});