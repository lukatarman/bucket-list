import Fastify from "fastify";
import cors from "@fastify/cors";

export class WebServer {
  #server;

  constructor(gameQueriesRouter) {
    this.#server = Fastify({
      logger: true,
    });

    this.#server.register(cors, gameQueriesRouter.routes);
  }

  async start() {
    this.#server.log.info("Starting server...");
    try {
      await this.#server.listen(3000);
    } catch (err) {
      this.#server.log.error(err);
      process.exit(1);
    }
  }

  async stop() {
    this.#server.log.info("Stopping server...");
    try {
      this.#server.close();
    } catch (err) {
      this.#server.log.error(err);
    }
  }
}
