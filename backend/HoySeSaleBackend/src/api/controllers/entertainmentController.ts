import { LOCALS } from "./localsController";
import { Request, Response } from "express";


export const getEntertainment = (req: Request, res: Response) => {
    res.send(LOCALS.find(element => element._id == Number(req.params.id)));
};