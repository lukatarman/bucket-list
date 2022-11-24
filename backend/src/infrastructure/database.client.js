import fs from "fs";
export class Database {
  newData = {
    test: "test",
    location: "location",
  };

  getBucketList() {
    return fs.readFileSync("./src/data/database-response.json", "utf-8");
  }
}
