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
    bucket.size     = 1024;
    bucket.files    = [];
    return bucket;
  }

  static subtractSize(bucket, fileDetails) {
    const copy = new Bucket();
    copy.name = bucket.name;
    copy.location = bucket.location;
    copy.size = bucket.size - fileDetails.size;
    copy.files = bucket.files;
    return copy;
  }
}
