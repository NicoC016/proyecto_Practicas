import { Repository, EntityRepository } from "typeorm";
import { Product } from "../entities/product";

@EntityRepository(Product)
class ProductRepository extends Repository<Product>{ }

export { ProductRepository };