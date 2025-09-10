const fs = require('fs');

function readDatabase(path) {
 return new Promise((resolve, rejects) => {
  fs.readFile(path, 'utf-8', (err, data) => {
    if (err) {
      rejects(new Error('Cannot load the database'));
      return;
    }
     const lines = data.split('\n').slice(1).filter((line) => line.trim() !== '');

     const fields = {};

     lines.forEach(line => {
       const [firstname, , , field] = line.split(',');

       if (fields[field]) {
           fields[field].push(firstname);
       } else {
          fields[field] = [firstname];
       } 
     });
     resolve(fields);
   });
 }); 
}

module.exports = readDatabase;
