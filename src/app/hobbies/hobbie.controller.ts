import { logger } from '../../util/logger';
import { Request, Response } from 'express';
import IHobbieService from './contracts/IHobbieService';

export default class HobbieController {
  constructor(private readonly hobbieService: IHobbieService) {}

  list = async (req: Request, res: Response): Promise<Response> => {
    try {
      const response = await this.hobbieService.list();
      return res.json(response);
    } catch (err: any) {
      logger.error(err);
      return res.status(err.status_code || 500);
    }
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const response = await this.hobbieService.create(req.body);
      return res.json(response);
    } catch (err: any) {
      logger.error(err);
      return res.status(err.status_code || 500);
    }
  };
}
