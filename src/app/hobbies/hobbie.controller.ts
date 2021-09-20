import { logger } from '../../util/logger';
import { Request, Response } from 'express';
import IHobbieService from './contracts/IHobbieService';
import BaseController from '../../entities/baseController';

export default class HobbieController extends BaseController {
  constructor(private readonly hobbieService: IHobbieService) {
    super();
  }

  list = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.hobbieService.list();
      res.json(response);
    } catch (err: any) {
      logger.error(err);
      this.sendErrorResponse(res, err);
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.hobbieService.create(
        req.params.user_id,
        req.body
      );
      res.status(201).json(response);
    } catch (err: any) {
      logger.error(err);
      res.status(err.status_code || 500);
    }
  };

  get = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.hobbieService.get(req.params.id);
      res.json(response);
    } catch (err: any) {
      logger.error(err);
      this.sendErrorResponse(res, err);
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    try {
      await this.hobbieService.update(req.body, req.params.id);
      res.status(204).json();
    } catch (err: any) {
      logger.error(err);
      res.status(err.status_code || 500);
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    try {
      await this.hobbieService.delete(req.params.id);
      res.status(204).json();
    } catch (err: any) {
      logger.error(err);
      this.sendErrorResponse(res, err);
    }
  };
}
