const fs = require('fs');

function countStudents(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }
      const lines = data.toString().split('\n');
      const sweStudents = [];
      const csStudents = [];
      for (let i = 0; i < lines.length; i += 1) {
        const field = lines[i].split(',');
        if (field[3] === 'SWE') {
          sweStudents.push(field[0]);
        } else if (field[3] === 'CS') {
          csStudents.push(field[0]);
        }
      }
      console.log(`Number of students: ${sweStudents.length + csStudents.length}`);
      console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
      console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
      resolve();
    });
  });
}

module.exports = countStudents;
