"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
const entertainment_1 = require("./entertainment");
class Event extends entertainment_1.Entertaiment {
    constructor(name, images, description, ubication, localSponsorID, schedule, id) {
        super(name, images, description, ubication, id);
        this.localSponsorID = localSponsorID;
        this.schedule = schedule;
    }
}
exports.Event = Event;
