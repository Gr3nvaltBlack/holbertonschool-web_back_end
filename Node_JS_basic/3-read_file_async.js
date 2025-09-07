function countStudents(path) {
    const fs = require('fs');

    let read_data_file;
    return new Promise((resolve, reject) => {

        read_data_file = fs.readFile(path, 'utf-8', (err, data) => {
        
            if (err) {
                reject(new Error('Cannot load the database'));
                return;
            }

            data = data.split('\n').slice(1).filter((lines) => lines.trim() !== '');
            console.log(`Number of students: ${data.length}`);

            const fields = {};
            data.forEach((line) => {
                const split_line = line.split(',');
                const student_first_name = split_line[0];
                const student_field = split_line[3];

                if (fields[student_field]) {
                    fields[student_field].push(student_first_name);
                } else {
                    fields[student_field] = [student_first_name];
                }
            });

            Object.keys(fields).forEach((field) => {
                const student_count = fields[field].length;
                console.log(`Number of students in ${field}: ${student_count}. List: ${fields[field].join(', ')}`);
            });

            resolve();
        });
    });
}

module.exports = countStudents;
