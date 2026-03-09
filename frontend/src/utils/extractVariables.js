export const extractVariables = (text) => {
  const regex = /{{(.*?)}}/g;
  const matches = [...text.matchAll(regex)];
  return matches.map((m) => m[1].trim());
};
