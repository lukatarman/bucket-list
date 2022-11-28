import { StorageClient } from "./infrastructure/storage.client.js";
import { QueriesRouter } from "./router.js";
import { WebServer } from "./infrastructure/web.server.js";

const storageClient = new StorageClient();
const queriesRouter = new QueriesRouter(storageClient);
const webServer = new WebServer(queriesRouter);

webServer.start();
