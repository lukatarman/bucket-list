export async function getData() {
  const response = await fetch("http://localhost:3000/database-response.json");
  return await response.json();
}
