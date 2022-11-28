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

export async function getFileList(selectedBucket) {
  return await axios.post("http://localhost:3000/fileList", { selectedBucket });
}

export async function uploadFile(file) {
  console.log(`Data sent to buckets/add/file API: ${file}`);
  await axios.post("http://localhost:3000/buckets/add/file", file);
}

export async function deleteFile(fileData) {
  await axios.delete("http://localhost:3000/buckets/delete/file", {
    data: { fileData },
  });
}
