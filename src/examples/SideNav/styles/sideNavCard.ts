// Images
import { Theme } from '@mui/material';

import backgroundImage from '~/assets/images/curved-images/white-curved.jpeg';

function card(theme: Theme, ownerState: { miniSideNav: boolean }) {
    const { borders, functions, transitions, breakpoints } = theme;
    const { miniSideNav } = ownerState;

    const { borderRadius } = borders;
    const { pxToRem } = functions;

    return {
        minWidth: 'auto',
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: '50%',
        backgroundSize: 'cover',
        borderRadius: borderRadius.xl,
        boxShadow: 'none',

        [breakpoints.up('xl')]: {
            maxHeight: miniSideNav ? pxToRem(64) : pxToRem(192),
            transition: transitions.create('max-height', {
                easing: transitions.easing.easeInOut,
                duration: transitions.duration.standard,
            }),
        },
    };
}

function cardContent(
    theme: Theme,
    ownerState: { sideNavColor: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark' },
) {
    const { palette, functions, borders } = theme;
    const { sideNavColor } = ownerState;

    const { white, dark, gradients } = palette;
    const { linearGradient } = functions;
    const { borderRadius } = borders;

    return {
        color: white.main,
        position: 'relative' as const,
        zIndex: 2,
        width: '100%',
        height: '100%',
        p: 2,

        '&::after': {
            content: '""',
            backgroundImage: linearGradient(gradients[sideNavColor].main, gradients[sideNavColor].state),
            display: 'block',
            height: '100%',
            width: '100%',
            borderRadius: borderRadius.xl,
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: 0.65,
            zIndex: -1,
        },

        '& .MuiButton-root': {
            color: dark.main,
        },

        '&:last-child': {
            pb: 2,
        },
    };
}

const cardIconBox = {
    display: 'grid',
    placeItems: 'center',
    transition: ({ transitions }: any) =>
        transitions.create('margin', {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
        }),
};

function cardIcon(
    theme: Theme,
    ownerState: { sideNavColor: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark' },
) {
    const { functions, palette } = theme;
    const { sideNavColor } = ownerState;

    const { linearGradient } = functions;
    const { gradients, transparent } = palette;

    return {
        backgroundImage: linearGradient(gradients[sideNavColor].main, gradients[sideNavColor].state),
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: transparent.main,
    };
}

export { card, cardContent, cardIconBox, cardIcon };
