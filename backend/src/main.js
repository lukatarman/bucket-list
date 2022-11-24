import { Database } from "./infrastructure/database.client.js";
import { QueriesRouter } from "./router.js";
import { WebServer } from "./infrastructure/web.server.js";

const database = new Database();
const queriesRouter = new QueriesRouter(database);
const webServer = new WebServer(queriesRouter);

webServer.start();
