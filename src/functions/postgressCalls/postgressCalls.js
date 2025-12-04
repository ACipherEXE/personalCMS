export async function getTokens() {
  const res = await fetch("http://localhost:3001/api/tokens/all");
  const data = await res.json();
  console.log(data);
  return data;
}
export async function getTable(tableName) {
  const res = await fetch(`http://localhost:3001/api/${tableName}`);
  const data = await res.json();
  console.log(data.res);
  return data.res;
}
