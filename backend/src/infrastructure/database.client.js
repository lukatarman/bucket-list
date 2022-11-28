import fs from "fs";
import { fixBytes } from "../utils/file.size.js";

export class Database {
  getBuckets() {
    return fs.readFileSync("./src/assets/database-response.json", "utf-8");
  }

  getFileList(bucketIndex) {
    const bucketContent = JSON.parse(
      fs.readFileSync("./src/assets/database-response.json", "utf-8")
    );

    return bucketContent[bucketIndex].files;
  }

  addBucketListEntry({ name, location }) {
    const bucketContent = JSON.parse(
      fs.readFileSync("./src/assets/database-response.json", "utf-8")
    );

    const newEntry = {
      name,
      location,
      size: "4.9 GB",
      files: [],
    };
    bucketContent.push(newEntry);

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

  async deleteBucket({ bucketIndex }) {
    const bucketContent = JSON.parse(
      fs.readFileSync("./src/assets/database-response.json", "utf-8")
    );

    bucketContent.splice(bucketIndex, 1);

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

  async addFile([fileDetails, bucketIndex]) {
    console.log(fileDetails);
    const bucketContent = JSON.parse(
      fs.readFileSync("./src/assets/database-response.json", "utf-8")
    );

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

    bucketContent[fileData.index].files.pop();

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
}
