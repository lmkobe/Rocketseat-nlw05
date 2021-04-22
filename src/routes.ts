import { Router } from "express";
import { getCustomRepository } from "typeorm";
import { SettingsController } from "./controllers/SettingsController";
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

routes.post("/settings", settingsController.create);

export { routes };