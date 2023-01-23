export class File {
  name;
  lastModified;
  size;
  buffer;

  // The buffer property is commented out, as it causes large files to freeze the app.
  // For larger files, a different method of saving data to the file should be used. It works with small files though.
  // Comment it back in to enable it.

  //prettier-ignore
  constructor(fileDetails) {
    this.name         = fileDetails.originalname;
    this.lastModified = Date.parse(new Date());
    this.size         = fileDetails.size;
    // this.buffer       = fileDetails.buffer;
  }
}
