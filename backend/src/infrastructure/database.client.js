import fs from "fs";
export class Database {
  getBucketList() {
    return fs.readFileSync("./src/assets/database-response.json", "utf-8");
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
}
