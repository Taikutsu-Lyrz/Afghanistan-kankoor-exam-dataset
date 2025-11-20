const fs = require('fs');
const path = require('path');

const datasetPath = './dataset/data';
let total = 0;

fs.readdirSync(datasetPath).forEach(subject => {
  const subjectDir = path.join(datasetPath, subject);
  const files = fs.readdirSync(subjectDir);
  files.forEach(file => {
    if (file.endsWith('.json')) {
      const data = JSON.parse(fs.readFileSync(path.join(subjectDir, file), 'utf-8'));
      total += data.length;
    }
  });
});

console.log(total);

// Save count to a file
fs.writeFileSync('questions-count.txt', total.toString());
