import { fixDate } from "../../../utils/date.js";
import { fixBytes } from "../../../utils/file.size.js";

export const fixFilesTable = (filesTable) => {
  return filesTable.map((filesTableValue) => {
    const fixedArr = [];

    for (const property in filesTableValue) {
      let currentValue = filesTableValue[property];

      if (property === "buffer") continue;
      if (property === "lastModified") currentValue = fixDate(currentValue);
      if (property === "size") currentValue = fixBytes(currentValue);

      fixedArr.push(currentValue);
    }

    return fixedArr;
  });
};
