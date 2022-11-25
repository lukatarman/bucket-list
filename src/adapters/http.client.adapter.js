import axios from "axios";

export async function getData() {
  return await axios.get("http://localhost:3000/bucketList");
}

export async function postData({ name, location }) {
  axios.post("http://localhost:3000/buckets/add/listEntry", { name, location });
}
