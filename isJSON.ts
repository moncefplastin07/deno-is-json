/**
 * @param str string 
 * @returns { boolean }
 */
export const isJSON = (str: any) => {
  // check if string
  if (!(typeof str === "string")) {
    return false;
  }

  // try to parse the input if it's valid json structure will return true or false if not json structure
  try {
    return JSON.parse(str) && true;
  } catch {
    return false;
  }
};
