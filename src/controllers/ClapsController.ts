import { Request, Response } from 'express';

class ClapsController {
  async create(req: Request, res: Response) {
    const { claps } = req.body;

    return res.status(200).json({ article_id: 1, user_id: 1, claps });
  }

  async incClaps(req: Request, res: Response) {
    
  }
}

export { ClapsController };