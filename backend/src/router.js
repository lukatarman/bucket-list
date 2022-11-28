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
    server.get("/buckets", async (request, reply) => {
      return this.#controller.getBuckets();
    });

    server.post("/buckets", async (request, reply) => {
      this.#controller.createBucket(request.body);
    });

    server.delete("/buckets", async (request, reply) => {
      return this.#controller.deleteBucket(request.body);
    });

    server.get("/buckets/:id/files", async (request, reply) => {
      const id = parseInt(request.params.id);
      return this.#controller.getFiles(id);
    });

    server.post(
      "/buckets/add/file",
      { preHandler: upload.single("file") },
      async (request, reply) => {
        this.#controller.addFile([request.file, request.body.index]);
      }
    );

    server.delete("/buckets/delete/file", async (request, reply) => {
      return this.#controller.deleteFile(request.body);
    });
  };
}
