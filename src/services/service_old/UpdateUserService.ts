// import { getCustomRepository } from "typeorm";
// import { User } from "../entities/User";
// import { UsersRepository } from "../repositories/UsersRepository";

// interface IUser {
//   id: string
//   username: string;
//   email: string;
//   phone: string;
//   city: string;
//   state: string;
// }

// class UpdateUserService {
//   async update({ id, username, email, phone, city, state }: IUser) {
//     const usersRepository = getCustomRepository(UsersRepository);

//     const user = await usersRepository
//       .createQueryBuilder()
//       .update(User)
//       .set({ username, email, phone, city, state })
//       .where("id = :id", { id })
//       .execute();

//     return user;

//   }
// }

// export { UpdateUserService };