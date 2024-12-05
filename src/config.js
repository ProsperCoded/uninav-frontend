const isLocal = process.env.NODE_ENV === "local";

export const BASE_URL = isLocal
  ? "http://localhost:3000/"
  : "https://uni-nav.vercel.app/";
