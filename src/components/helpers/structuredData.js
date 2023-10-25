export const structuredData = jsonState?.data?.map((row) => {
  const obj = {};
  for (let i = 0; i < jsonState?.cols.length; i++) {
    obj[jsonState?.cols[i]] = row[i];
  }
  return obj;
});
