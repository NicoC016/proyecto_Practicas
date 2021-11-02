import { Request, Response } from "express";
import { Category } from "../entities/Category";
import {CategoryService } from "../services/serviceCategory";


class Categorys {
    async CreateCategory(request: Request, response: Response) {
        const { id, name} = request.body;
      
        const createCategoryService = new CategoryService();
      
        try {
          await createCategoryService.create({
            id,
            name,

          }).then(() => {
            response.render("Category/message", {
              message: "categoria registrada con éxito"
            });
          });
        } catch (err) {
          response.render("Category/message", {
            message: `Error al registrar la categoria: ${err.message}`
          });
        }
      
      
    }

  
    async deteleCategory(request: Request, response: Response) {
      const { id } = request.body;
      
      const deleteCategoryService = new CategoryService();
      
      try {
        await deleteCategoryService.delete(id).then(() => {
          response.render("Category/message", {
            message: "Categoria eliminada con éxito"
          });
        });
      } catch (err) {
        response.render("Category/message", {
          message: `Error al elminar la categoria: ${err.message}`
        });
      }
    }
  
    async getDataCategory(request: Request, response: Response) {
      let { id } = request.query;
      id = id.toString();
    
      const getcategoryDataService = new CategoryService();
    
      const user = await getcategoryDataService.getData(id);
    
      return response.render("Category/edit", {
        category: Category
      });
    }
    

    async listCategory(request: Request, response: Response) {
      const listCategoryService = new CategoryService();
  
      const category = await listCategoryService.list();
  
      return response.render("index", {
        category: Category
      });
    }

    async seachCategory(request: Request, response: Response) {
      let { search } = request.query;
      search = search.toString();
  
      const searchCategoryService = new CategoryService();
  
      try {
        const product = await searchCategoryService.search(search);
        response.render("Category/search", {
          category: Category,
          search: search
        });
      } catch (err) {
        response.render("Category/message", {
          message: `Error al buscar el usuario: ${err.message}`
        });
      }
    }

    async handleCategory(request: Request, response: Response) {
      const { id, name } = request.body;
  
      const updateCategoryService = new CategoryService();
  
      try {
        await updateCategoryService.update({ id, name }).then(() => {
          response.render("Category/message", {
            message: "Usuario actualizado con exito"
          });
        });
      } catch (err) {
        response.render("Category/message", {
          message: `Error al actualizar usuario: ${err.message}`
        });
      }
  
    }
}
     
  
export{Categorys}