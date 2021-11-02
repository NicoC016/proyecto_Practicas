import { response, Router } from "express";
import { Users} from "./controllers/controllersUser";
import { Products} from "./controllers/ControllerProduct";
import { Categorys} from "./controllers/ControllerCategory";




const router = Router();
const a = new Users()
const createUser = new Users();
const searchUser = new Users();
const updateUser = new Users();
const deleteUser = new Users();
const listUser = new Users();
const getUserData = new Users();

router.get("/", (request, response) => {
 response.render("index")
});

router.get("/User", listUser.listUser);

router.get("/add", (request, response) => {
  response.render("User/add");
});

router.post("/add-user", createUser.CreateUser);

router.get("/search", searchUser.seachUser);

router.get("/edit", getUserData.getDataUser);

router.post("/edit-user", updateUser.handleUpdate);

router.post("/delete-user", deleteUser.deteleUser);

export { router };

const router1 = Router();

const productController = new Products();


router1.get("/product", productController.listProduct);

router1.get("/product/add", (request, response) => {
  response.render("Product/add");
});

router1.post("/product/add-Product", productController.CreateProduct);

router1.get("/product/search", productController.seachProduct);

router1.get("/product/edit", productController.getDataProduct);

router1.post("/product/edit-product", productController.handleProduct);

router1.post("/product/delete-product", productController.deteleProduct);

export { router1 }


const router2 = Router();

const createCategory = new Categorys();
const searchCategory = new Categorys();
const updateCategory = new Categorys();
const deleteCategory = new Categorys();
const listCategory = new Categorys();
const getCategoryData = new Categorys();

router.get("/category", listCategory.listCategory);

router.get("/category/add", (request, response) => {
  response.render("Category/add");
});

router.post("/category/add-category", createCategory.CreateCategory);

router.get("/category/search", searchCategory.seachCategory);

router.get("/category/edit", getCategoryData.getDataCategory);

router.post("/category/edit-category", updateCategory.handleCategory);

router.post("/category/delete-category", deleteCategory.deteleCategory);

export { router2 };