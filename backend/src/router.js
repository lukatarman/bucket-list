import multer from "fastify-multer";
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

export class QueriesRouter {
  #controller;

  constructor(queriesController) {
    this.#controller = queriesController;
  }

  routes = async (server, options) => {
    server.get("/bucketList", async (request, reply) => {
      return await this.#controller.getBucketList();
    });

    server.post("/buckets/add", async (request, reply) => {
      this.#controller.addBucketListEntry(request.body);
    });
  };
}
