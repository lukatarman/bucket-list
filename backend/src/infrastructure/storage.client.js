import fs from "fs";
import { Bucket } from "../models/bucket.js";
import { fixBytes } from "../utils/file.size.js";

export class StorageClient {
  getBuckets() {
    return this.#getParsedFile();
  }

  createBucket(data) {
    const existingData = this.#getParsedFile();

    const newBucket = Bucket.newEntry(data);

    existingData.push(newBucket);

    this.#saveFileWithNewData(existingData);
  }

  async deleteBucket({ bucketIndex }) {
    const existingData = this.#getParsedFile();

    existingData.splice(bucketIndex, 1);

    this.#saveFileWithNewData(existingData);
  }

  getFiles(bucketIndex) {
    const existingData = this.#getParsedFile();

    return existingData[bucketIndex].files;
  }

  async addFile(fileDetails, bucketIndex) {
    const existingData = this.#getParsedFile();

    fileDetails.lastModified = fixDate();

    existingData[bucketIndex].files.push(new File(fileDetails));

    this.#saveFileWithNewData(existingData);
  }

  deleteFile(bucketIndex) {
    const existingData = this.#getParsedFile();

    existingData[bucketIndex].files.pop();

    this.#saveFileWithNewData(existingData);
  }

  #getParsedFile() {
    return JSON.parse(fs.readFileSync("./src/assets/database-response.json", "utf-8"));
  }

  #saveFileWithNewData(data) {
    fs.writeFileSync(
      "./src/assets/database-response.json",
      JSON.stringify(data),
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("file has been updated");
      }
    );
  }
}
