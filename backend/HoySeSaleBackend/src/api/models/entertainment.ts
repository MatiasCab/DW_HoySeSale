import { Coordinates } from "./coordinates";

export abstract class Entertaiment {
    constructor(
        public name: string,
        public images: string[],
        public description: string,
        public ubication: Coordinates,
        public _id: number | undefined
    ) {
        if(!_id){
            this._id = Math.floor(Math.random() * 1000000);
        }
    }
}