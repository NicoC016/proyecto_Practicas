import { Repository, EntityRepository } from "typeorm";
import { Category } from "../entities/Category";

@EntityRepository(Category)
class categoryRepository extends Repository<Category>{ }

export { categoryRepository };