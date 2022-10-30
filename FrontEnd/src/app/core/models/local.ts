import { Coordinates } from "./coordinates";
import { Entertaiment } from "./entertainment";

type localType = "bar" | "dancingParty" | "pub";

export interface Local extends Entertaiment {
    qualification: number;
    events: string[];
    type: localType;
}