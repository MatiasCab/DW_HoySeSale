"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEntertainment = void 0;
const localsController_1 = require("./localsController");
const getEntertainment = (req, res) => {
    console.log(req.params.id);
    console.log(localsController_1.LOCALS.find(element => element._id == Number(req.params.id)));
    res.send(localsController_1.LOCALS.find(element => element._id == Number(req.params.id)));
};
exports.getEntertainment = getEntertainment;
