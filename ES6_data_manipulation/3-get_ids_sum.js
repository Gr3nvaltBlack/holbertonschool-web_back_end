export default function getStudentIdsSum(student = []) {
    return student.reduce((acc, curr) => acc + curr.id, 0);
};
