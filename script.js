const fs = require('fs').promises;

const fileNames = [
  "file1.txt",
  "file2.txt",
  "file3.txt",
  "file4.txt",
  "file5.txt",
];

(async function readAllFiles() {
  try {
    const reads = fileNames.map(f => fs.readFile(f, 'utf8'));
    const contents = await Promise.all(reads);
    contents.forEach((c, i) => {
      console.log(`File ${i + 1}: ${c}`);
    });
  } catch (err) {
    console.error('Error reading files:', err);
  }
})();