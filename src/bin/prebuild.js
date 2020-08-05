//ENV variable only valid values are 'dev' or 'prod'

var fs = require('fs');

function readWriteSync() {
let env = process.env.ENV || 'dev';

var data = fs.readFileSync(`src/environments/environment.${env}.ts`, 'utf-8');
fs.writeFileSync('src/environments/environment.ts', data, 'utf-8');
console.log(`Environment File overwritten succesfully.Current Environment : ${env}`);
}
readWriteSync();
