import { Coordinates } from "./coordinates";
import { Entertaiment } from "./entertainment";

export class Event extends Entertaiment {
    localSponsorID: number;
    schedule: Date;

    constructor(name: string, images: string[], description: string, ubication: Coordinates, localSponsorID: number, schedule: Date, id?: number) {
        super(name, images, description, ubication, id)
        this.localSponsorID = localSponsorID;
        this.schedule = schedule;
    }
}