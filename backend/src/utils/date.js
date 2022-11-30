export function fixDate() {
  const currentDate = new Date();
  const fixedDay = ("0" + currentDate.getDate()).slice(-2);
  const fixedMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2);
  return `${fixedDay}.${fixedMonth}.${currentDate.getFullYear()}`;
}
