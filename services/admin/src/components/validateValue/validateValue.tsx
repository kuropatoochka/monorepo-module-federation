export const validateValue = ( value: number): boolean => {
  return !(value < 0 || value > 100);
}