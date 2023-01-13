export function fixDate(date) {
  const fixedDate = new Date(date);
  const fixedDay = ("0" + fixedDate.getDate()).slice(-2);
  const fixedMonth = ("0" + (fixedDate.getMonth() + 1)).slice(-2);
  return `${fixedDay}.${fixedMonth}.${fixedDate.getFullYear()}`;
}
