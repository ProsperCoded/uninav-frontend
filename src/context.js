import { createContext } from "react";
export const MESSAGE_API_CONTEXT = createContext({
  success: (content) => {},
  error: (content) => {},
  info: (content) => {},
  warning: (content) => {},
});

export const USER_PROFILE_CONTEXT = createContext({
  userProfile: null,
  setUserProfile: (userProfile) => {},
});
