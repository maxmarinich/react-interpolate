export const isPrimitive = (item: any): boolean => {
  return typeof item === "string" || typeof item === "number";
};
