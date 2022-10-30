export class Coordinates{
    constructor(
        private lat: number,
        private long: number
    ) {}

    get getLat(){
        return this.lat;
    }

    get getLong(){
        return this.long;
    }
}