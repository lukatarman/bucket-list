export async function getData() {
  const response = await fetch("http://localhost:3000/database-response.json");
  return await response.json();
}

export async function postData(data) {
  fetch("http://localhost:3000/database-response.json", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      location: data.location,
    }),
  });
}
