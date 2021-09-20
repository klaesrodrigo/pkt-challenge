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
      const response = await this.hobbieService.create(
        req.params.user_id,
        req.body
      );
      return res.status(201).json(response);
    } catch (err: any) {
      logger.error(err);
      return res.status(err.status_code || 500);
    }
  };

  get = async (req: Request, res: Response): Promise<Response> => {
    try {
      const response = await this.hobbieService.get(req.params.id);
      return res.json(response);
    } catch (err: any) {
      logger.error(err);
      return res.status(err.status_code || 500);
    }
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    try {
      await this.hobbieService.update(req.body, req.params.id);
      return res.status(204).json();
    } catch (err: any) {
      logger.error(err);
      return res.status(err.status_code || 500);
    }
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      await this.hobbieService.delete(req.params.id);
      return res.status(204).json();
    } catch (err: any) {
      logger.error(err);
      return res.status(500).json(err);
    }
  };
}
