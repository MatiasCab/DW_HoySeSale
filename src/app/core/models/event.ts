import { Entertainment } from "./entertainment";

export interface Event extends Entertainment {
    sponsorName: string;
    schedule: string;
}