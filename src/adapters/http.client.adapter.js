import axios from "axios";

export async function getBucketList() {
  return await axios.get("http://localhost:3000/bucketList");
}

export async function getFileList(selectedBucket) {
  return await axios.post("http://localhost:3000/fileList", { selectedBucket });
}

export async function postData({ name, location }) {
  await axios.post("http://localhost:3000/buckets/add/listEntry", {
    name,
    location,
    files: [],
  });
}

export function uploadFiles(file) {
  console.log("Uploading..");
  console.log(file);
  axios.post("http://localhost:3000/buckets/add/files", file);
  console.log("done uploading");
}
