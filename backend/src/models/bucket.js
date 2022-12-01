export class Bucket {
  name;
  location;
  size;
  files;

  //prettier-ignore
  static createEmptyBucket(data) {
    const bucket    = new Bucket;
    bucket.name     = data.name;
    bucket.location = data.location;
    bucket.size     = 5368709120;
    bucket.files    = [];
    return bucket;
  }

  //prettier-ignore
  static createExistingBucket(data) {
    const bucket    = new Bucket();
    bucket.name     = data.name;
    bucket.location = data.location;
    bucket.size     = data.size;
    bucket.files    = data.files;
    return bucket;
  }

  subtractSize(fileSize) {
    this.size = this.size - fileSize;
  }

  addSize(fileSize) {
    this.size = this.size + fileSize;
  }
}
