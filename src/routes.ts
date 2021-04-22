import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { MessagesController } from "./controllers/MessagesController";
import { SettingsController } from "./controllers/SettingsController";
import { UsersController } from "./controllers/UsersControllers";
import { SettingsRepository } from "./repositories/SettingsRepository";

/**
 * Tipos de parametros
 * Routes Params => Parametros de rotas
 * http://localhost:3030/settings/1
 * Query Params => Filtros e Buscas
 * http://localhost:3030/settings/1?search=algumacoisa
 * 
 * Body params => {
 * }
 */

const routes = Router();

const settingsController = new SettingsController();
const usersController = new UsersController();
const messagesController = new MessagesController();

routes.post("/settings", settingsController.create);
routes.post("/users", usersController.create);
routes.post("/messages", messagesController.create);
routes.get("/messages/:id", messagesController.showByUser);


export { routes };