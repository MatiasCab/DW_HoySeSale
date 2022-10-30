import { Coordinates } from "./coordinates";
import { Entertaiment } from "./entertainment";

type localType = "bar" | "dancingParty" | "pub";

export class Local extends Entertaiment {
    qualification: number;
    events: string[] = [];
    type: localType;

    constructor(name: string, images: string[], description: string, ubication: Coordinates, qualification: number, type: localType, id?: number) {
        super(name, images, description, ubication, id)
        this.qualification = qualification;
        this.type = type;
    }
}