"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllLocals = exports.LOCALS = void 0;
const coordinates_1 = require("../models/coordinates");
const local_1 = require("../models/local");
const event_1 = require("../models/event");
exports.LOCALS = [
    new local_1.Local("Local 1", ["../../../assets/images/alex-voulgaris-jfoIIFLw3_Y-unsplash.jpg", "../../../assets/images/tony-pham-FUmDe-Bx1LA-unsplash.jpg"], "PORBANDO LA DESCRIPTION", new coordinates_1.Coordinates(-34.8887900442016, -56.15940182848994), 3, "bar"),
    new local_1.Local("Local 2", ["../../../assets/images/alex-voulgaris-jfoIIFLw3_Y-unsplash.jpg", "../../../assets/images/tony-pham-FUmDe-Bx1LA-unsplash.jpg"], "PORBANDO LA DESCRIPTION 2", new coordinates_1.Coordinates(-34.8887900442016, -56.15940182848994), 3, "bar"),
    new local_1.Local("Local 3", ["../../../assets/images/alex-voulgaris-jfoIIFLw3_Y-unsplash.jpg", "../../../assets/images/tony-pham-FUmDe-Bx1LA-unsplash.jpg"], "PORBANDO LA DESCRIPTION 3", new coordinates_1.Coordinates(-34.8887900442016, -56.15940182848994), 3, "bar"),
    new local_1.Local("Local 4", ["../../../assets/images/alex-voulgaris-jfoIIFLw3_Y-unsplash.jpg", "../../../assets/images/tony-pham-FUmDe-Bx1LA-unsplash.jpg"], "PORBANDO LA DESCRIPTION 4", new coordinates_1.Coordinates(-34.8887900442016, -56.15940182848994), 3, "bar"),
    new local_1.Local("Local 5", ["../../../assets/images/alex-voulgaris-jfoIIFLw3_Y-unsplash.jpg", "../../../assets/images/tony-pham-FUmDe-Bx1LA-unsplash.jpg"], "PORBANDO LA DESCRIPTION 5", new coordinates_1.Coordinates(-34.8887900442016, -56.15940182848994), 3, "bar"),
    new event_1.Event("Evento 1", ["../../../assets/images/alex-voulgaris-jfoIIFLw3_Y-unsplash.jpg", "../../../assets/images/tony-pham-FUmDe-Bx1LA-unsplash.jpg"], "PORBANDO LA DESCRIPTION EVENTO 1", new coordinates_1.Coordinates(-34.8887900442016, -56.15940182848994), 1, new Date()),
    new event_1.Event("Evento 2", ["../../../assets/images/alex-voulgaris-jfoIIFLw3_Y-unsplash.jpg", "../../../assets/images/tony-pham-FUmDe-Bx1LA-unsplash.jpg"], "PORBANDO LA DESCRIPTION  EVENTO 2", new coordinates_1.Coordinates(-34.8887900442016, -56.15940182848994), 1, new Date()),
    new event_1.Event("Evento 3", ["../../../assets/images/alex-voulgaris-jfoIIFLw3_Y-unsplash.jpg", "../../../assets/images/tony-pham-FUmDe-Bx1LA-unsplash.jpg"], "PORBANDO LA DESCRIPTION  EVENTO 3", new coordinates_1.Coordinates(-34.8887900442016, -56.15940182848994), 1, new Date())
];
const getAllLocals = (_req, res) => {
    res.send(exports.LOCALS);
};
exports.getAllLocals = getAllLocals;
