import fs from 'fs';
import { yarg } from './config/plugins/args.plugin';

const { b: base, l: limit, s: showTable } = yarg;

let outputMessage = '';
const headerMessage = `
=========================================
            Tabla del ${ base }
=========================================\n
`;

for(let i = 1; i <= limit; i++) {
    outputMessage += `${base} x ${i} = ${base * i}\n`;
}

outputMessage = headerMessage + outputMessage;

if (showTable) {
    console.log(outputMessage);
}

const outputPath = 'outputs/folder1/folder2/folder3';

fs.mkdirSync(outputPath, {recursive: true});
fs.writeFileSync(`${outputPath}/tabla-${base}.txt`, outputMessage);
console.log('File created!');

/* Mi versión
let text: string = '';

text += '=========================================\n     Tabla del 5\n=========================================\n';

for(let i = 1; i <= 10; i++) {
    text += '\n5 x ' + i + ' = ' + 5 * i;
}

console.log(text);

const fs = require('fs');

fs.writeFileSync('outputs/tabla-5.txt', text);
*/


