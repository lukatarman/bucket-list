export class Bucket {
  name;
  location;
  size;
  files;

  //prettier-ignore
  static newEntry(data) {
    const bucket    = new Bucket;
    bucket.name     = data.name;
    bucket.location = data.location;
    bucket.size     = 5368709120;
    bucket.files    = [];
    return bucket;
  }
}
