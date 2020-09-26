const fs = require('fs');
const path = require('path');

const getAllFiles = (dirPath, arrayOfFiles) => {
  const blackList = ['node_modules', 'git', '.next'];

  for (const dir of blackList) {
    if (dirPath.includes(dir)) {
      return arrayOfFiles;
    }
  }
  const files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach(function (file) {
    if (fs.statSync(dirPath + '/' + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + '/' + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(__dirname, dirPath, '/', file));
    }
  });

  return arrayOfFiles;
};

console.log(getAllFiles('/Users/kevin/Desktop/code/contest-pug'));
