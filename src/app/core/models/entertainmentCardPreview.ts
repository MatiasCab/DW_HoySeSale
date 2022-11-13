export interface entertainmentCardPreview {
    entertainmentID: number;
    name: string;
    type: 'bar' | 'pub' | 'dancingParty' | 'event';
    imageLink: string;
}