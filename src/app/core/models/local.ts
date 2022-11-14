import { Entertainment } from "./entertainment";
import { entertainmentCardPreview } from "./entertainmentCardPreview";

type localType = "bar" | "dancingParty" | "pub";

export interface Local extends Entertainment {
    localType: localType,
    qualification: number;
    localEvents: entertainmentCardPreview[];
}