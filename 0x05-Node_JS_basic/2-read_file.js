const fs = require('fs');

function countStudents(filepath) {
  const sweStudents = [];
  const csStudents = [];
  try {
    const data = fs.readFileSync(filepath, 'utf-8');
    const lines = data.toString().split('\n');
    for (let i = 1; i < lines.length; i += 1) {
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
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
