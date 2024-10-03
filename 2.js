function solution(phoneNumber) {
  const shownNumber = phoneNumber.slice(-4);
  const hiddenNumber = '*'.repeat(phoneNumber.length - 4);

  return hiddenNumber + shownNumber;
}
