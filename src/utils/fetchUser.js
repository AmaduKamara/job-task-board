export const fetchUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};
