function countStudents(path) {
    const fs = require('fs');
    let data;
    try {
        data = fs.readFileSync(path, 'utf-8');
    } catch (err) {
        throw new Error('Cannot load the database');
    }

    const tab_lines = data.split('\n').slice(1).filter((lines) => lines.trim() !== '');
    console.log(`Number of students: ${tab_lines.length}`);
    const fields = {};

    tab_lines.forEach((line) => {
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
}
module.exports = countStudents;