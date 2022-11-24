export class QueriesRouter {
  #controller;

  constructor(queriesController) {
    this.#controller = queriesController;
  }

  routes = async (server, options) => {
    server.get("/bucketList", async (request, reply) => {
      return await this.#controller.getBucketList();
    });
  };
}