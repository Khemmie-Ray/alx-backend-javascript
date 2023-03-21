const fs = require('fs');

function countStudents(path) {
  if (!fs.existsSync(dataPath)) {
    throw new Error('Cannot load the database');
  }

}
