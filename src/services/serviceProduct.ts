import { getCustomRepository } from "typeorm";
import { ProductRepository } from "../repositories/productRepository";
import { Product } from "../entities/product";
import {Category} from "../entities/Category"
import { categoryRepository } from "../repositories/CategoryRepository";

interface IProduct {
    id?:string;
    name: string;
    cost: number;
    type: "varchar";
    
}

class ProductService {
    async create({  name, cost, type }: IProduct) {
      if (!name || !cost || !type) {
        throw new Error("Por favor revise todos los campos");
      }
  
      const productRepository = getCustomRepository(ProductRepository);  
      const nameAlreadyExists = await productRepository.findOne({ name });

      if (nameAlreadyExists) {
      throw new Error("nombre ya esta registrado");
      }
        

      const product = productRepository.create({ name, cost, type});

      await productRepository.save(product);  
      return product;

  
    }

    async delete(id: string) {
      const productRepository = getCustomRepository(ProductRepository);
  
      const product = await productRepository
        .createQueryBuilder()
        .delete()
        .from(Product)
        .where("id = :id", { id })
        .execute();
  
      return product;
  
    }

    async list() {
      const productRepository = getCustomRepository(ProductRepository);
  
      const product = await productRepository.find();
  
      return product;
    }

    async search(search: string) {
      if (!search) {
        throw new Error("Por favor escriba algo en el buscador");
      }
  
      const productRepository = getCustomRepository(ProductRepository);
  
      const product = await productRepository
        .createQueryBuilder()
        .where("name like :search", { search: `%${search}%` })
        .orWhere("id like :search", { search: `%${search}%` })
        .orWhere("cost like :search", { search: `%${search}%` })
        .orWhere("type like :search", { search: `%${search}%` })
        .orWhere("categories like :search", { search: `%${search}%` })
        
        .getMany();
  
      return product;
  
    }


    async update({ id, name, cost, type}: IProduct) {
      const productRepository = getCustomRepository(ProductRepository);
  
      const product = await productRepository
        .createQueryBuilder()
        .update(Product)
        .set({ name, cost, type})
        .where("id = :id", { id })
        .execute();
  
      return product;
  
    }

    async getData(id: string) {
      const productRepository = getCustomRepository(ProductRepository);
  
      const product = await productRepository.findOne(id);
  
      return product;
    }
}
export { ProductService};