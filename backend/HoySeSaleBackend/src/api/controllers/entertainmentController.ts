import { LOCALS } from "./localsController";
import { Request, Response } from "express";


export const getEntertainment = (req: Request, res: Response) => {
    console.log(req.params.id);
    console.log(LOCALS.find(element => element._id == Number(req.params.id)));
    res.send(LOCALS.find(element => element._id == Number(req.params.id)));
};