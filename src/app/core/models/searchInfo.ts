import { entertainmentCardPreview } from "./entertainmentCardPreview"

export interface searchInfo {
    type?: string;
    searchInput?: string;
}

export interface searchResponse {
    entertainments: entertainmentCardPreview[];
    searchIndex: number;
}

export interface searchView{
    oldEntertainments: entertainmentCardPreview[];
    action: 'new' | 'extends';
    newEntertainments: entertainmentCardPreview[];
}