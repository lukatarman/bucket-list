import fs from "fs";
export class Database {
  newData = {
    test: "test",
    location: "location",
  };

  getBucketList() {
    fs.writeFile(
      "./src/data/database-response.json",
      JSON.stringify(this.newData),
      (err) => {
        if (err) throw err;
        console.log("data added");
      }
    );
  }
}
