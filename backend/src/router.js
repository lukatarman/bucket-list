import multer from "fastify-multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//todo: receive body with text to mark which array entry in JSON file we are going for.

export class QueriesRouter {
  #controller;

  constructor(queriesController) {
    this.#controller = queriesController;
  }

  routes = async (server, options) => {
    server.get("/bucketList", async (request, reply) => {
      return this.#controller.getBucketList();
    });

    server.post("/fileList", async (request, reply) => {
      return this.#controller.getFileList(request.body.selectedBucket);
    });

    server.post("/buckets/add/listEntry", async (request, reply) => {
      this.#controller.addBucketListEntry(request.body);
    });

    server.post(
      "/buckets/add/file",
      { preHandler: upload.single("file") },
      async (request, reply) => {
        this.#controller.addFile([request.file, request.body.name]);
      }
    );
  };
}
