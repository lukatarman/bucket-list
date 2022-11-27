import fs from "fs";
import { fixBytes } from "../utils/file.size.js";

export class Database {
  getBucketList() {
    return fs.readFileSync("./src/assets/database-response.json", "utf-8");
  }

  getFileList(bucketName) {
    const bucketContent = JSON.parse(
      fs.readFileSync("./src/assets/database-response.json", "utf-8")
    );

    const bucketIndex = bucketContent.findIndex((bucket) => bucket.name === bucketName);

    console.log(bucketContent[bucketIndex]);
    return bucketContent[bucketIndex].files;
  }

  addBucketListEntry(data) {
    const bucketContent = JSON.parse(
      fs.readFileSync("./src/assets/database-response.json", "utf-8")
    );
    bucketContent.push(data);

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

  async addFile([fileDetails, bucketName]) {
    const bucketContent = JSON.parse(
      fs.readFileSync("./src/assets/database-response.json", "utf-8")
    );

    const bucketIndex = bucketContent.findIndex((bucket) => bucket.name === bucketName);

    bucketContent[bucketIndex].files.push({
      name: fileDetails.originalname,
      lastModified: this.fixedDate,
      size: fixBytes(fileDetails.size),
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

  deleteFile({ fileData }) {
    const bucketContent = JSON.parse(
      fs.readFileSync("./src/assets/database-response.json", "utf-8")
    );

    console.log(fileData);

    bucketContent[fileData.selectedBucket.index].files.splice(
      fileData.selectedFile.index,
      1
    );

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

    console.log(bucketContent);
  }
}
