import { Coordinates } from "./coordinates";

export interface Entertaiment {
    name: string;
    images: string[];
    description: string;
    ubication: Coordinates;
    _id: number | undefined;
}