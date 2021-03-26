import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { User } from "../models/User";

class ArticleController {
  async create(req: Request, res: Response) {
    const { name, email } = req.body;

    const usersRepository = getRepository(User);

    const user = usersRepository.create({
      name,
      email
    })

    await usersRepository.save(user);

    return res.status(201).json(user);
  }
}

export { ArticleController }