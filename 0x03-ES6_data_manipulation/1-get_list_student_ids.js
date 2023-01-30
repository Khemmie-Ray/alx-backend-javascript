export default function getListStudentIds(ids) {
  if (ids instanceof Array) {
    return ids.map((student) => student.id);
  }

  return [];
}
