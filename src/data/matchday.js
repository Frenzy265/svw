export const getMatchday = async () => {
  const result = await fetch("https://www.openligadb.de/api/getmatchdata/bl1");
  const data = await result.json();
  return data;
};
