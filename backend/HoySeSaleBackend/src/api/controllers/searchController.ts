import { Request, Response } from "express";
import { entertainmentPreview } from "./localsController";

import { getDB } from '../../config/sqlDatabase';

export const getAllSearchResults = (_req: Request, res: Response) => {
    getDB().query('SHOW TABLES', (error: any, results: any) => {
        if (error) throw error;
        console.log(results);
    });
    res.send(entertainmentPreview);
};