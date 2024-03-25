import { User } from "../types/contexts/user_context_types";

export const addUserToLS = (user: User) => {
  localStorage.setItem("user", JSON.stringify(user));
};

export const removeUserFromLS = () => {
  localStorage.removeItem("user");
};

export const getUserFromLS = () => {
  const result = localStorage.getItem("user");
  const user = result ? JSON.parse(result) : null;
  return user;
};
