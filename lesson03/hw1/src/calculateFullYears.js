export default dateOfBirthday => {
  const MILLISEC_IN_YEAR = 31536000000;
  const currentDate = new Date();
  return Math.floor(Math.abs(dateOfBirthday - currentDate) / MILLISEC_IN_YEAR);
};
