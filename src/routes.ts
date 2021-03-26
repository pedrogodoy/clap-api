import { Router } from 'express';
import { ArticleController } from './controllers/ArticleController';
import { ClapsController } from './controllers/ClapsController';
import { UserController } from './controllers/UserController';

const router = Router();

const clapsController = new ClapsController();
const usersController = new UserController();
const articleController = new ArticleController();

router.post("/claps", clapsController.create);
router.post("/users", usersController.create);

export { router };