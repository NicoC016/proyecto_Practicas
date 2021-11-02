import { getCustomRepository } from "typeorm";
import { categoryRepository } from "../repositories/CategoryRepository";
import { Category } from "../entities/Category";

interface ICategory {
    id:string;
    name: string;
}

class CategoryService {
    async create({name}: ICategory) {
      if (!name) {
        throw new Error("Porfavor revise todos los campos");
      }
  
      const CategoryRepository = getCustomRepository(categoryRepository);
  

  
      const nameAlreadyExists = await CategoryRepository.findOne({ name });
  
      if (nameAlreadyExists) {
        throw new Error("nombre ya esta registrado");
      }
  
      const category = CategoryRepository.create({name});
  
      await CategoryRepository.save(category);
  
      return category;
  
    }

    async delete(id: string) {
      const CategoryRepository = getCustomRepository(categoryRepository);
  
      const category = await CategoryRepository
        .createQueryBuilder()
        .delete()
        .from(Category)
        .where("id = :id", { id })
        .execute();
  
      return category;
  
    }

    async list() {
      const CategoryRepository = getCustomRepository(categoryRepository);
  
      const category = await CategoryRepository.find();
  
      return category;
    }

    async search(search: string) {
      if (!search) {
        throw new Error("Por favor escriba algo en el buscador");
      }
  
      const CategoryRepository = getCustomRepository(categoryRepository);
  
      const category = await CategoryRepository
        .createQueryBuilder()
        .where("name like :search", { search: `%${search}%` })
        .orWhere("id like :search", { search: `%${search}%` })
        .getMany();
  
      return category;
  
    }


    async update({ id, name}: ICategory) {
      const CategoryRepository = getCustomRepository(categoryRepository);
  
      const category = await CategoryRepository
        .createQueryBuilder()
        .update(Category)
        .set({ name, id})
        .where("id = :id", { id })
        .execute();
  
      return category;
  
    }

    async getData(id: string) {
      const CategoryRepository = getCustomRepository(categoryRepository);
  
      const category = await CategoryRepository.findOne(id);
  
      return category;
    }
}
export { CategoryService};

