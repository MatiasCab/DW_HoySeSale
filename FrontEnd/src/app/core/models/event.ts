import { Entertaiment } from "./entertainment";

export interface LocalEvent extends Entertaiment {
    localSponsorID: number;
    schedule: Date;
}