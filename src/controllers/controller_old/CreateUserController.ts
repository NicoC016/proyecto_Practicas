// import { Request, Response } from "express";
// import { CreateUserService } from "../services/CreateUserService";

// class CreateUserController {
//   async handle(request: Request, response: Response) {
//     const { username, email, phone, city, state } = request.body;

//     const createUserService = new CreateUserService();

//     try {
//       await createUserService.create({
//         username,
//         email,
//         phone,
//         city,
//         state
//       }).then(() => {
//         response.render("message", {
//           message: "Usuario registrado con éxito"
//         });
//       });
//     } catch (err) {
//       response.render("message", {
//         message: `Error al registrar el usuario: ${err.message}`
//       });
//     }

//   }
// }

// export { CreateUserController };