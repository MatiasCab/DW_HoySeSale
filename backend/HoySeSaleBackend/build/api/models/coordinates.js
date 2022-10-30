"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coordinates = void 0;
class Coordinates {
    constructor(lat, long) {
        this.lat = lat;
        this.long = long;
    }
    get getLat() {
        return this.lat;
    }
    get getLong() {
        return this.long;
    }
}
exports.Coordinates = Coordinates;
