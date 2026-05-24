//your JS code here. If required.
const fileNames = [
  "file1.txt",
  "file2.txt",
  "file3.txt",
  "file4.txt",
  "file5.txt",
];

( async function readAllFiles() {
	try {
		const reads = Files.map(f => fs.readFile(f, 'utf8'));
		const contents = Await Promise.all(reads);
		contents.forEach((c,i) => {
			console.log(`File ${i + 1}: ${c}`);
		});
	} catch (err) {
		console.errpr('Error reading Files:', err);
	}
}) ();

// do not change the code above
// add your code here
