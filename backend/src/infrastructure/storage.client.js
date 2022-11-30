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
    console.log(fileDetails);
    const bucketContent = JSON.parse(
      fs.readFileSync("./src/assets/database-response.json", "utf-8")
    );

    bucketContent[bucketIndex].files.push({
      name: fileDetails.originalname,
      lastModified: this.fixedDate,
      size: fixBytes(fileDetails.size),
      buffer: fileDetails.buffer,
    });

    fs.writeFileSync(
      "./src/assets/database-response.json",
      JSON.stringify(bucketContent),
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("file has been updated");
      }
    );
  }

  get fixedDate() {
    const currentDate = new Date();
    const fixedDay = ("0" + currentDate.getDate()).slice(-2);
    const fixedMonth = ("0" + (currentDate.getMonth() + 1)).slice(-2);
    return `${fixedDay}.${fixedMonth}.${currentDate.getFullYear()}`;
  }

  deleteFile(bucketIndex) {
    const bucketContent = JSON.parse(
      fs.readFileSync("./src/assets/database-response.json", "utf-8")
    );

    bucketContent[bucketIndex].files.pop();

    fs.writeFileSync(
      "./src/assets/database-response.json",
      JSON.stringify(bucketContent),
      (err) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log("file has been updated");
      }
    );
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
