import { Request, Response } from "express";

export interface IApplicationController {
  getAllApplication: (req: Request, res: Response) => Response | void;
}
