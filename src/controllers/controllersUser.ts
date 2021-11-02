import { Request, Response } from "express";
import { UserService } from "../services/serviceUser";


class Users {
  async CreateUser(request: Request, response: Response) {
      const { id = false, username, email, phone, city, state } = request.body;
    
      const createUserService = new UserService();
    
      try {
        await createUserService.create({
          id,
          username,
          email,
          phone,
          city,
          state
        }).then(() => {
          response.render("User/message", {
            message: "Usuario registrado con éxito"
          });
        });
      } catch (err) {
        response.render("User/message", {
          message: `Error al registrar el usuario: ${err.message}`
        });
      }
    
    
  }

  async deteleUser(request: Request, response: Response) {
    const { id } = request.body;
    
    const deleteUserService = new UserService();
    
    try {
      await deleteUserService.delete(id).then(() => {
        response.render("User/message", {
          message: "Usuario eliminado con éxito"
        });
      });
    } catch (err) {
      response.render("User/message", {
        message: `Error al elminar Usuario: ${err.message}`
      });
    }
  }

  async getDataUser(request: Request, response: Response) {
    let { id } = request.query;
    id = id.toString();
  
    const getUserDataService = new UserService();
  
    const user = await getUserDataService.getData(id);
  
    return response.render("User/edit", {
      user: user
    });
  }
  
  async listUser(request: Request, response: Response) {
    const listUsersService = new UserService();

    const users = await listUsersService.list();

    return response.render("index", {
      users: users
    });
  }

  async seachUser(request: Request, response: Response) {
    let { search } = request.query;
    search = search.toString();

    const searchUserService = new UserService();

    try {
      const users = await searchUserService.search(search);
      response.render("User/search", {
        users: users,
        search: search
      });
    } catch (err) {
      response.render("User/message", {
        message: `Error al buscar el usuario: ${err.message}`
      });
    }
  }

  async handleUpdate(request: Request, response: Response) {
    const { id, username, email, phone, city, state } = request.body;

    const updateUserService = new UserService();

    try {
      await updateUserService.update({ id, username, email, phone, city, state }).then(() => {
        response.render("User/message", {
          message: "Usuario actualizado con exito"
        });
      });
    } catch (err) {
      response.render("User/message", {
        message: `Error al actualizar usuario: ${err.message}`
      });
    }

  }
}
   

export{Users}