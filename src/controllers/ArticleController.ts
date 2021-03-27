import { Request, Response } from "express";
import { getCustomRepository, getRepository } from "typeorm";
import { AppError } from "../errors/AppError";
import { Article } from "../models/Article";
import { Claps } from "../models/Claps";
import { User } from "../models/User";

class ArticleController {
  async create(req: Request, res: Response) {
    const { title, text } = req.body;

    const articlesRepository = getRepository(Article);

    const article = articlesRepository.create({
      title,
      text
    })

    await articlesRepository.save(article);

    return res.status(201).json(article);
  }

  async get(req: Request, res: Response) {
    const articlesRepository = getRepository(Article);
    const clapsRepository = getRepository(Claps);

    const article = await articlesRepository.findOne();
    const claps = await clapsRepository.findOne();

    return res.status(200).json({ article, claps });
  }

  async claps(req: Request, res: Response) {
    const { claps } = req.body;
    // const { article_id } = req.params;
    // const { user_id } = req.headers;
    const articlesRepository = getRepository(Article);
    const usersRepository = getRepository(User);
    const clapsRepository = getRepository(Claps);

    const article = await articlesRepository.findOne();
    const user = await usersRepository.findOne();
    const clap = await clapsRepository.findOne();

    if(!article) {
      throw new AppError('Article does not exist!');
    }

    if(!user) {
      throw new AppError('User does not exist!');
    }

    if(!clap) {
      const newClap = clapsRepository.create({
        claps,
        user_id: user.id,
        article_id: article.id
      })

      await clapsRepository.save(newClap);

      return res.status(200).json(newClap);
    }

    if(claps >= 50) {
      throw new AppError('Max claps by the article is 50!', 400);
    }

    await clapsRepository.update({ id: clap.id }, {
      claps
    });

    return res.status(200).json({ claps });
  }



}

export { ArticleController }