const getHour = new Date().getHours();

export function GetRightHour() {
  if (getHour % 3 === 0) {
    return getHour - 3;
  }
  if ((getHour - 2) % 3 === 0) {
    return getHour - 5;
  }
  if ((getHour - 1) % 3 === 0) {
    return getHour - 4;
  }
  if (getHour === 1 && 2) {
    return 6;
  }
}