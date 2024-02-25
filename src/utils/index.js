export const validateUserName = (userName) => {
  if (!userName) {
    return "UserName is required";
  }
  if(userName.lengh < 3) {
    return "UserName shoukd be more then 3 chars"
  }
  return false;
};
