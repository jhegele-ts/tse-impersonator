export const stringIsEmpty = (
  userString: string | undefined | null
): boolean => {
  if (userString === "") return true;
  if (userString === null) return true;
  if (userString === undefined) return true;
  return false;
};
