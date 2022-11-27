import axios from "axios";

export async function getBucketList() {
  return await axios.get("http://localhost:3000/bucketList");
}

export async function getFileList(selectedBucket) {
  return await axios.post("http://localhost:3000/fileList", { selectedBucket });
}

export async function postData(data) {
  await axios.post("http://localhost:3000/buckets/add/listEntry", data);
}

export async function uploadFile(file) {
  await axios.post("http://localhost:3000/buckets/add/file", file);
}

export async function deleteFile(fileData) {
  console.log(fileData);
  await axios.delete("http://localhost:3000/buckets/delete/file", {
    data: { fileData },
  });
}
