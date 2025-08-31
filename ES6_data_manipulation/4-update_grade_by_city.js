export default function updateStudentGradeByCity(students, city, newGrades) {
 const filteredStudents = students.filter(student => student.location === city);

 return filteredStudents.map((student) => {
    const foundGrade = newGrades.find(grade => grade.studentId === student.id); 
    return foundGrade ? {
        ...student,
        grade: foundGrade.grade
    } : {
        ...student,
        grade: 'N/A'
    }
});
}