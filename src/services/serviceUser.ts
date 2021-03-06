import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { User } from "../entities/User";


interface IUser {
    id:number
    username: string;
    email: string;
    phone: string;
    city: string;
    state: string;
}

class UserService {
    async create({ username, email, phone, city, state }: IUser) {
      if (!username || !email || !phone || !city || !state) {
        throw new Error("Porfavor revise todos los campos");
      }
  
      const usersRepository = getCustomRepository(UsersRepository);
  
      const usernameAlreadyExists = await usersRepository.findOne({ username });
  
      if (usernameAlreadyExists) {
        throw new Error("Username ya esta registrado");
      }
  
      const emailAlreadyExists = await usersRepository.findOne({ email });
  
      if (emailAlreadyExists) {
        throw new Error("Email ya esta registrado");
      }
  
      const user = usersRepository.create({ username, email, phone, city, state });
  
      await usersRepository.save(user);
  
      return user;
  
    }

    async delete(id: string) {
      const usersRepository = getCustomRepository(UsersRepository);
  
      const user = await usersRepository
        .createQueryBuilder()
        .delete()
        .from(User)
        .where("id = :id", { id })
        .execute();
  
      return user;
  
    }

    async getData(id: string) {
      const usersRepository = getCustomRepository(UsersRepository);
  
      const user = await usersRepository.findOne(id);
  
      return user;
    }

    async list() {
      const usersRepository = getCustomRepository(UsersRepository);
  
      const users = await usersRepository.find();
  
      return users;
    }

    async search(search: string) {
      if (!search) {
        throw new Error("Por favor escriba algo en el buscador");
      }
  
      const usersRepository = getCustomRepository(UsersRepository);
  
      const user = await usersRepository
        .createQueryBuilder()
        .where("username like :search", { search: `%${search}%` })
        .orWhere("email like :search", { search: `%${search}%` })
        .orWhere("phone like :search", { search: `%${search}%` })
        .orWhere("city like :search", { search: `%${search}%` })
        .orWhere("state like :search", { search: `%${search}%` })
        .getMany();
  
      return user;
  
    }


    async update({ id, username, email, phone, city, state }: IUser) {
      const usersRepository = getCustomRepository(UsersRepository);
  
      const user = await usersRepository
        .createQueryBuilder()
        .update(User)
        .set({ username, email, phone, city, state })
        .where("id = :id", { id })
        .execute();
  
      return user;
  
    }
}
export { UserService};