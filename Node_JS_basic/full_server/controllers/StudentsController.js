import read_data from '../utils.js';
const data_path = process.argv[2];

class StudentsController {
    static getAllStudents(request, response) {
        read_data(data_path)
        .then((data) => {
         const fields = Object.keys(data).sort((a, b) => a.toLowerCase()
           .localeCompare(b.toLowerCase())
         );

         let output = 'This is the list of our students\n';
           fields.forEach((field) => {
           const students = data[field];
         output += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
       });
       response.status(200).send(output);
        })
        .catch(() => {
         response.status(500).send('Cannot load the database');
        });
    }
    static getAllStudentsByMajor(request, response) {
        const { major } = request.params;

        if (major !== 'CS' && major !== 'SWE') {
            return response.status(500).send('Major parameter must be CS or SWE');
        }

        read_data(data_path)
        .then((data) => {
                const students = data[major] || []; // Handle case where major has no students
                response.status(200).send(`List: ${students.join(', ')}`);
        })
        .catch(() => {
            response.status(500).send('Cannot load the database');
        });
    }
}

export default StudentsController;
