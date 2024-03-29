import multer from "fastify-multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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
      "/buckets/:id/files",
      { preHandler: upload.single("file") },
      async (request, reply) => {
        const id = parseInt(request.params.id);
        this.#controller.addFile(request.file, id);
      }
    );

    server.delete("/buckets/:id/files", async (request, reply) => {
      const id = parseInt(request.params.id);
      return this.#controller.deleteFile(id, request.body);
    });
  };
}
