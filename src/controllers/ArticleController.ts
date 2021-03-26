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

  async claps(req: Request, res: Response) {
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
        claps: 0,
        user_id: user.id,
        article_id: article.id
      })

      await clapsRepository.save(newClap);

      return res.status(201).json(newClap);
    }

    if(clap.claps === 50) {
      throw new AppError('Max claps by the article is 50!', 400);
    }

    const incrementedClap = clap.claps + 1;

    await clapsRepository.update({ id: clap.id }, {
      claps: incrementedClap
    });

    return res.status(200).json({ claps: incrementedClap });
  }

}

export { ArticleController }