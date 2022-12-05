import { atom } from "recoil";

export const selectedBucketState = atom({
  key: "SelectedBucket",
  default: "",
});

export const visiblePageState = atom({
  key: "VisiblePage",
  default: "bucket-list",
});
