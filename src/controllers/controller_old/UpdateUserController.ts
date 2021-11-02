import { Request, Response } from "express";
import { UpdateUserService } from "../services/UpdateUserService";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id, username, email, phone, city, state } = request.body;

    const updateUserService = new UpdateUserService();

    try {
      await updateUserService.update({ id, username, email, phone, city, state }).then(() => {
        response.render("message", {
          message: "Usuário atualizado com sucesso"
        });
      });
    } catch (err) {
      response.render("message", {
        message: `Erro ao atualizar usuário: ${err.message}`
      });
    }

  }
}

export { UpdateUserController };