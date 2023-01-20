import { atom } from "recoil";

export const displayCreateBucketState = atom({
  key: "DisplayCreateBucket",
  default: false,
});

export const displayCreateButtonState = atom({
  key: "DisplayCreateButton",
  default: true,
});

export const bucketListTableResultsState = atom({
  key: "BucketListTableResults",
  default: [],
});

export const selectedFileList = atom({
  key: "SelectedFileList",
  default: null,
});
