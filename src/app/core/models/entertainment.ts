export interface Entertainment {
    entertainmentID: number;
    name: string;
    description: string;
    lat: number;
    lon: number;
    imagesLinks: string[];
    locationImage: string;
    isFavorite: boolean;
}