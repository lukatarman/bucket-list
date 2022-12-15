import { atom } from "recoil";

export const visibleTabState = atom({
  key: "VisibleTab",
  default: "file-list",
});

export const visibleDeleteState = atom({
  key: "VisibleDelete",
  default: false,
});

export const filesTableState = atom({
  key: "FilesTable",
  default: [],
});

export const showDetailsAlertState = atom({
  key: "ShowDetailsAlert",
  default: false,
});
