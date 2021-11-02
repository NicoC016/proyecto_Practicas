// import { getCustomRepository } from "typeorm";
// import { UsersRepository } from "../../repositories/UsersRepository";

// interface IUser {
//   username: string;
//   email: string;
//   phone: string;
//   city: string;
//   state: string;
// }

// class CreateUserService {
//   async create({ username, email, phone, city, state }: IUser) {
//     if (!username || !email || !phone || !city || !state) {
//       throw new Error("Porfavor revise todos los campos");
//     }

//     const usersRepository = getCustomRepository(UsersRepository);

//     const usernameAlreadyExists = await usersRepository.findOne({ username });

//     if (usernameAlreadyExists) {
//       throw new Error("Username ya esta registrado");
//     }

//     const emailAlreadyExists = await usersRepository.findOne({ email });

//     if (emailAlreadyExists) {
//       throw new Error("Email ya esta registrado");
//     }

//     const user = usersRepository.create({ username, email, phone, city, state });

//     await usersRepository.save(user);

//     return user;

//   }
// }

// export { CreateUserService };