import { BASE_URL } from "./config";
export async function getDepartments(
  errorHandler = () => {},
  successHandler = () => {}
) {
  const url = new URL("university-entities/department", BASE_URL);
  const response = await fetch(url);
  const result = response.json();
  if (response.ok) {
    successHandler(result);
  } else {
    errorHandler(result);
    return;
  }
  return result;
}

export async function getFaculties(
  errorHandler = () => {},
  successHandler = () => {}
) {
  const url = new URL("university-entities/faculty", BASE_URL);
  const response = await fetch(url);
  const result = response.json();
  if (response.ok) {
    successHandler(result);
  } else {
    errorHandler(result);
    return;
  }
  return result;
}
