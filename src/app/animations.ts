import {
    trigger,
    style,
    animate,
    transition,
    query,
    group
} from '@angular/animations';

export const appAnimations = [
    trigger("presentationToLogin", [
    transition('a <=> b', [
        query(':enter, :leave', style({ position: 'fixed', width: '100%' }), { optional: true }),
        group([
            query(':enter', [
                style({ opacity: 0 }),
                animate('0.2s', style({ opacity: 1 }))
            ], { optional: true }),
            query(':leave', [
                style({ filter: 'blur(0px)' }),
                animate('0.2s', style({ filter: 'blur(10px)' }))], { optional: true }),
        ])
    ])
]), trigger("favoriteInCard", [
    transition("putFavorite <=> quitFavorite", [
        style({ position: 'absolute' }),
        animate('0.2s', style({ transform: "scale(0.5)" }))
    ])
]), trigger("favorite", [
    transition("putFavorite <=> quitFavorite", [
        animate('0.2s', style({ transform: "scale(0.5)" }))
    ])
])
];