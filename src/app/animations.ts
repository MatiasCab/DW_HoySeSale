import {
    trigger,
    style,
    animate,
    transition,
    query,
    group,
    animateChild
} from '@angular/animations';

export const appAnimations = [
    trigger("router", [
        transition('Presentation <=> Login, SingUp <=> Login, Presentation <=> SingUp', [
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
    ]), trigger("homeCards", [
        transition(":enter", [
            style({ transform: "scale(0)" }),
            animate('0.5s {{delay}}s', style({ transform: "scale(1.155)" })),
            animate('0.2s', style({ transform: "scale(0.855)" })),
            animate('0.2s', style({ transform: "scale(1.08)" })),
            animate('0.2s', style({ transform: "scale(0.9)" })),
            animate('0.2s', style({ transform: "scale(1)" }))
        ], { params: { delay: 0 } })
    ]), trigger("searchedCards", [
        transition(":enter", [
            style({ transform: "scale(0)", opacity: 0 }),
            animate('0.2s {{delay}}s', style({ transform: "scale(1)", opacity: 1 }))
        ], { params: { delay: 0 } })
    ]), trigger("chatPage", [
        transition(":enter", [
            style({ transform: "translateX(100%)"}),
            animate('0.3s', style({ transform: "translateX(0%)"}))
        ])
    ])
];