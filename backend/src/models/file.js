export class File {
  name;
  lastModified;
  size;
  buffer;

  //prettier-ignore
  constructor(fileDetails) {
    this.name         = fileDetails.originalname;
    this.lastModified = fileDetails.lastModified;
    this.size         = fileDetails.size;
    this.buffer       = fileDetails.buffer;
  }
}
