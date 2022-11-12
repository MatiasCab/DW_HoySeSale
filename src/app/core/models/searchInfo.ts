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
    entertainments: entertainmentCardPreview[],
    action: 'new' | 'extends'
}