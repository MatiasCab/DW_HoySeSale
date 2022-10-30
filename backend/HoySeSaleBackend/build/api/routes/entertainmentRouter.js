"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const entertainmentController_1 = require("../controllers/entertainmentController");
const localsController_1 = require("../controllers/localsController");
const router = express_1.default.Router();
router.get("/", localsController_1.getAllLocals);
router.get("/:id", entertainmentController_1.getEntertainment);
module.exports = router;
