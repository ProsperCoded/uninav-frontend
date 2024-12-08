const isLocal = process.env.NODE_ENV === "local";

export const BASE_URL = isLocal
  ? "http://localhost:3000/"
  : "https://uni-nav.vercel.app/";
export const ACCESS_TOKEN_DURATION = 7; // days
export const REFRESH_TOKEN_DURATION = 30; // days
