const fs = require('fs');
const path = require('path');


const datasetPath = './Afghanistan-kankoor-questions-dataset/dataset/data';
let total = 0;

fs.readdirSync(datasetPath).forEach(subject => {
  const subjectDir = path.join(datasetPath, subject);


  if (!fs.lstatSync(subjectDir).isDirectory()) return;

  fs.readdirSync(subjectDir).forEach(file => {
    if (file.endsWith('.json')) {
      const filePath = path.join(subjectDir, file);
      const raw = fs.readFileSync(filePath, 'utf-8');
      const data = JSON.parse(raw);


      if (Array.isArray(data)) {
        total += data.length;
      } else if (data.questions && Array.isArray(data.questions)) {
        total += data.questions.length;
      } else {
        console.warn(`Unknown JSON format: ${file}`);
      }
    }
  });
});

console.log(`Total questions: ${total}`);
fs.writeFileSync('questions-count.txt', total.toString());
