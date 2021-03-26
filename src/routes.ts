import { Router } from 'express';
import { ClapsController } from './controllers/ClapsController';

const router = Router();

const clapsController = new ClapsController();

router.post("/claps", clapsController.create);

export { router };