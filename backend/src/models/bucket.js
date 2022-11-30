export class Bucket {
  name;
  location;
  size;
  files;

  //prettier-ignore
  static createBucket(data) {
    const bucket    = new Bucket;
    bucket.name     = data.name;
    bucket.location = data.location;
    bucket.size     = 5368709120;
    bucket.files    = [];
    return bucket;
  }

  //prettier-ignore
  static subtractSize(bucket, fileSize) {
    const copy    = new Bucket();
    copy.name     = bucket.name;
    copy.location = bucket.location;
    copy.size     = bucket.size - fileSize;
    copy.files    = bucket.files;
    return copy;
  }

  //prettier-ignore
  static addSize(bucket, fileSize) {
    const copy    = new Bucket();
    copy.name     = bucket.name;
    copy.location = bucket.location;
    copy.size     = bucket.size + fileSize;
    copy.files    = bucket.files;
    return copy;
  }
}
