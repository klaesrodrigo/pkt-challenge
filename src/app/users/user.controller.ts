import { logger } from '../../util/logger';
import { Request, Response } from 'express';
import IUserService from './contracts/IUserService';

export default class UserController {
  constructor(private readonly userService: IUserService) {}

  list = async (req: Request, res: Response): Promise<Response> => {
    try {
      const response = await this.userService.list();
      return res.json(response);
    } catch (err: any) {
      logger.error(err);
      return res.status(err.status_code || 500);
    }
  };

  create = async (req: Request, res: Response): Promise<Response> => {
    try {
      const response = await this.userService.create(req.body);
      return res.status(201).json(response);
    } catch (err: any) {
      logger.error(err);
      return res.status(err.status_code || 500);
    }
  };

  get = async (req: Request, res: Response): Promise<Response> => {
    try {
      const response = await this.userService.get(req.params.id);
      return res.json(response);
    } catch (err: any) {
      logger.error(err);
      return res.status(err.status_code || 500);
    }
  };

  update = async (req: Request, res: Response): Promise<Response> => {
    try {
      await this.userService.update(req.body, req.params.id);
      return res.status(204).json();
    } catch (err: any) {
      logger.error(err);
      return res.status(err.status_code || 500);
    }
  };

  delete = async (req: Request, res: Response): Promise<Response> => {
    try {
      await this.userService.delete(req.params.id);
      return res.status(204).json();
    } catch (err: any) {
      logger.error(err);
      return res.status(500).json(err);
    }
  };
}
