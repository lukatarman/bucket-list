import axios from "axios";

export async function getBuckets() {
  return await axios.get("http://localhost:3000/buckets");
}

export async function createBucket(data) {
  await axios.post("http://localhost:3000/buckets", data);
}

export async function deleteBucket(bucketIndex) {
  await axios.delete("http://localhost:3000/buckets", {
    data: { bucketIndex },
  });
}

export async function getFiles(bucketIndex) {
  return await axios.get(`http://localhost:3000/buckets/${bucketIndex}/files`);
}

export async function uploadFile(file, index) {
  console.log(file);
  await axios.post(`http://localhost:3000/buckets/${index}/files`, file);
}

export async function deleteFile(fileData) {
  await axios.delete("http://localhost:3000/buckets/delete/file", {
    data: { fileData },
  });
}
