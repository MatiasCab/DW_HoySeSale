"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Local = void 0;
const entertainment_1 = require("./entertainment");
class Local extends entertainment_1.Entertaiment {
    constructor(name, images, description, ubication, qualification, type, id) {
        super(name, images, description, ubication, id);
        this.events = [];
        this.qualification = qualification;
        this.type = type;
    }
}
exports.Local = Local;
