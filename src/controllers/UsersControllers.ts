import { Request, Response } from "express";
import { UsersService } from "../services/UsersService";

class UsersController {
  async create(request: Request, response: Response) : Promise<Response> {
    const { email } = request.body;

    const usersService = new UsersService();

    const user = await usersService.create(email);

    return response.json(user);

    /* try {
      const settings = await settingsService.create({ chat, username });

      return response.json(settings);
    } catch (err) {
      return response.status(400).json({
        message: err.message,
      });
    } */
  }
}
export { UsersController };
