"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entertaiment = void 0;
class Entertaiment {
    constructor(name, images, description, ubication, _id) {
        this.name = name;
        this.images = images;
        this.description = description;
        this.ubication = ubication;
        this._id = _id;
        if (!_id) {
            this._id = Math.floor(Math.random() * 1000000);
        }
    }
}
exports.Entertaiment = Entertaiment;
