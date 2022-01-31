import * as fs from 'fs';
import * as path from 'path';

const docsDirPath = path.join(__dirname, '../docs');

const files = fs.readdirSync(docsDirPath);

files.forEach((file) => {
  const filePath = path.join(docsDirPath, file);
  const doc = fs.readFileSync(filePath, 'utf8').toString();
  const newDoc = doc.replace(/.md/g, '');

  fs.writeFileSync(filePath, newDoc);
});
