import { query, Request, Response } from "express";
import { Category } from "../entities/Category";
import { Product } from "../entities/product";
import { CategoryService } from "../services/serviceCategory";
import {ProductService } from "../services/serviceProduct";





class Products {
    async CreateProduct(request: Request, response: Response) {
        const {  id ,name, cost, type} = request.body;
      
        const createProductService = new ProductService();
      
        try {
          await createProductService.create({
            id,
            name,
            cost,
            type 

          }).then(() => {
            response.render("Product/message", {
              message: "Usuario registrado con éxito"
            });
          });
        } catch (err) {
          response.render("Product/message", {
            message: `Error al registrar el usuario: ${err.message}`
          });
        }   
      
    }

  
    async deteleProduct(request: Request, response: Response) {
      const { id } = request.body;
      
      const deleteProductService = new ProductService();
      
      try {
        await deleteProductService.delete(id).then(() => {
          response.render("Product/message", {
            message: "Usuario eliminado con éxito"
          });
        });
      } catch (err) {
        response.render("Product/message", {
          message: `Error al elminar Usuario: ${err.message}`
        });
      }
    }
  
    async getDataProduct(request: Request, response: Response) {
      let { id } = request.query;
      id = id.toString();
    
      const getProductDataService = new ProductService();
    
      const getproduct = await getProductDataService.getData(id);
    
      return response.render("Product/edit", {
        product: Product
      });
    }
    

    async listProduct(request: Request, response: Response) {

      let {category_id} = request.query
      category_id = toString()



      const listProductService = new ProductService();

      const listProduct = await listProductService.list();

      return response.render("/Product/add", {
        product: Product
      });
    }

    async seachProduct(request: Request, response: Response) {
      let { search } = request.query;
      search = search.toString();
  
      const searchProductService = new ProductService();
  
      try {
        const product = await searchProductService.search(search);
        response.render("/search", {
          product: Product,
          search: search
        });
      } catch (err) {
        response.render("Product/message", {
          message: `Error al buscar el usuario: ${err.message}`
        });
      }
    }

    async handleProduct(request: Request, response: Response) {
      const { id, name, cost, type } = request.body;
  
      const updateProductService = new ProductService();
  
      try {
        await updateProductService.update({ id, name, cost, type }).then(() => {
          response.render("Product/message", {
            message: "Usuario actualizado con exito"
          });
        });
      } catch (err) {
        response.render("Product/message", {
          message: `Error al actualizar usuario: ${err.message}`
        });
      }
  
    }
}
     
  
export{Products}