import { logger } from '../../util/logger';
import { Request, Response } from 'express';
import IUserService from './contracts/IUserService';
import BaseController from '../../entities/baseController';

export default class UserController extends BaseController {
  constructor(private readonly userService: IUserService) {
    super();
  }

  list = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.userService.list();
      res.json(response);
    } catch (err: any) {
      logger.error(err);
      this.sendErrorResponse(res, err);
    }
  };

  create = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.userService.create(req.body);
      res.status(201).json(response);
    } catch (err: any) {
      logger.error(err);
      this.sendCreateUpdateErrorResponse(res, err);
    }
  };

  get = async (req: Request, res: Response): Promise<void> => {
    try {
      const response = await this.userService.get(req.params.id);
      res.json(response);
    } catch (err: any) {
      logger.error(err);
      this.sendErrorResponse(res, err);
    }
  };

  update = async (req: Request, res: Response): Promise<void> => {
    try {
      await this.userService.update(req.body, req.params.id);
      res.status(204).json();
    } catch (err: any) {
      logger.error(err);
      this.sendCreateUpdateErrorResponse(res, err);
    }
  };

  delete = async (req: Request, res: Response): Promise<void> => {
    try {
      await this.userService.delete(req.params.id);
      res.status(204).json();
    } catch (err: any) {
      logger.error(err);
      this.sendErrorResponse(res, err);
    }
  };
}
