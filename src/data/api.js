export const defaultQueryFn = async ({ queryKey }) => {
  const result = await fetch(
    `https://www.openligadb.de/api/getmatchdata/bl1${queryKey}`
  );
  const data = await result.json();
  return data;
};

export const getNextMatch = async () => {
  const result = await fetch(
    "https://www.openligadb.de/api/getnextmatchbyleagueteam/4442/134"
  );
  const data = await result.json();
  return data;
};
