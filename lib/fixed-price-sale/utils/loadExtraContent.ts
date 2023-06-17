export const loadExtraContent = async <T = never>(contentUri: string) => {
  const response = await fetch(contentUri);

  // TODO: more strong type check of json
  const result = (await response.json()) as T;
  return result;
};
