import fs from "fs";
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

    fs.writeFile(
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

  addFiles(file) {
    console.log(file);
  }
}
