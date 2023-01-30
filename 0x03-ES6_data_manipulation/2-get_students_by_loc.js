export default function getStudentsByLocation(students, place) {
  if (students instanceof Array) {
    return students.filter((student) => student.location === place);
  }

  return [];
}
