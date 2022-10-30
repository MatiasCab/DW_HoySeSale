import { Request, Response } from "express";
import { Coordinates } from "../models/coordinates";
import { Local } from "../models/local";
import { Event } from "../models/event";

export const LOCALS: (Local | Event)[] = [
    new Local("Local 1", ["../../../assets/images/alex-voulgaris-jfoIIFLw3_Y-unsplash.jpg", "../../../assets/images/tony-pham-FUmDe-Bx1LA-unsplash.jpg"], "PORBANDO LA DESCRIPTION", new Coordinates(-34.8887900442016, -56.15940182848994), 3, "bar"),
    new Local("Local 2", ["../../../assets/images/alex-voulgaris-jfoIIFLw3_Y-unsplash.jpg", "../../../assets/images/tony-pham-FUmDe-Bx1LA-unsplash.jpg"], "PORBANDO LA DESCRIPTION 2", new Coordinates(-34.8887900442016, -56.15940182848994), 3, "bar"),
    new Local("Local 3", ["../../../assets/images/alex-voulgaris-jfoIIFLw3_Y-unsplash.jpg", "../../../assets/images/tony-pham-FUmDe-Bx1LA-unsplash.jpg"], "PORBANDO LA DESCRIPTION 3", new Coordinates(-34.8887900442016, -56.15940182848994), 3, "bar"),
    new Local("Local 4", ["../../../assets/images/alex-voulgaris-jfoIIFLw3_Y-unsplash.jpg", "../../../assets/images/tony-pham-FUmDe-Bx1LA-unsplash.jpg"], "PORBANDO LA DESCRIPTION 4", new Coordinates(-34.8887900442016, -56.15940182848994), 3, "bar"),
    new Local("Local 5", ["../../../assets/images/alex-voulgaris-jfoIIFLw3_Y-unsplash.jpg", "../../../assets/images/tony-pham-FUmDe-Bx1LA-unsplash.jpg"], "PORBANDO LA DESCRIPTION 5", new Coordinates(-34.8887900442016, -56.15940182848994), 3, "bar"),
    new Event("Evento 1", ["../../../assets/images/alex-voulgaris-jfoIIFLw3_Y-unsplash.jpg", "../../../assets/images/tony-pham-FUmDe-Bx1LA-unsplash.jpg"], "PORBANDO LA DESCRIPTION EVENTO 1", new Coordinates(-34.8887900442016, -56.15940182848994), 1, new Date() ),
    new Event("Evento 2", ["../../../assets/images/alex-voulgaris-jfoIIFLw3_Y-unsplash.jpg", "../../../assets/images/tony-pham-FUmDe-Bx1LA-unsplash.jpg"], "PORBANDO LA DESCRIPTION  EVENTO 2", new Coordinates(-34.8887900442016, -56.15940182848994), 1, new Date() ),
    new Event("Evento 3", ["../../../assets/images/alex-voulgaris-jfoIIFLw3_Y-unsplash.jpg", "../../../assets/images/tony-pham-FUmDe-Bx1LA-unsplash.jpg"], "PORBANDO LA DESCRIPTION  EVENTO 3", new Coordinates(-34.8887900442016, -56.15940182848994), 1, new Date() )
]

export const getAllLocals = (_req: Request, res: Response) => {
    res.send(LOCALS);
};