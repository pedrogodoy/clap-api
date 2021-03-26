import { Router } from 'express';
import { ArticleController } from './controllers/ArticleController';
import { UserController } from './controllers/UserController';

const router = Router();

const usersController = new UserController();
const articleController = new ArticleController();

router.post("/users", usersController.create);
router.post("/articles", articleController.create);
router.patch("/articles/claps", articleController.claps);

export { router };