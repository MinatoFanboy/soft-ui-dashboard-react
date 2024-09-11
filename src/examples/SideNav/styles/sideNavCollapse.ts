import { Theme } from '@mui/material';

function collapseItem(theme: Theme, ownerState: { active: boolean; transparentSideNav: boolean }) {
    const { palette, transitions, breakpoints, boxShadows, borders, functions } = theme;
    const { active, transparentSideNav } = ownerState;

    const { dark, white, text, transparent } = palette;
    const { xxl } = boxShadows;
    const { borderRadius } = borders;
    const { pxToRem } = functions;

    return {
        background: active && transparentSideNav ? white.main : transparent.main,
        color: active ? dark.main : text.main,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: `${pxToRem(10.8)} ${pxToRem(12.8)} ${pxToRem(10.8)} ${pxToRem(16)}`,
        margin: `0 ${pxToRem(16)}`,
        borderRadius: borderRadius.md,
        cursor: 'pointer' as const,
        userSelect: 'none' as const,
        whiteSpace: 'nowrap' as const,
        boxShadow: active && transparentSideNav ? xxl : 'none',
        [breakpoints.up('xl')]: {
            boxShadow: () => {
                if (active) {
                    return transparentSideNav ? xxl : 'none';
                }

                return 'none';
            },
            transition: transitions.create('box-shadow', {
                easing: transitions.easing.easeInOut,
                duration: transitions.duration.shorter,
            }),
        },
    };
}

function collapseIconBox(
    theme: Theme,
    ownerState: {
        active: boolean;
        transparentSideNav: boolean;
        color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark';
    },
) {
    const { palette, transitions, breakpoints, boxShadows, borders, functions } = theme;
    const { active, transparentSideNav, color } = ownerState;

    const { white, light, gradients } = palette;
    const { md } = boxShadows;
    const { borderRadius } = borders;
    const { pxToRem } = functions;

    return {
        background: () => {
            if (active) {
                return palette[color].main;
            }

            return light.main;
        },
        minWidth: pxToRem(32),
        minHeight: pxToRem(32),
        borderRadius: borderRadius.md,
        display: 'grid',
        placeItems: 'center',
        boxShadow: md,
        transition: transitions.create('margin', {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
        }),

        [breakpoints.up('xl')]: {
            background: () => {
                let background;

                if (!active) {
                    background = transparentSideNav ? white.main : light.main;
                } else if (color === 'warning') {
                    background = gradients.warning.main;
                } else {
                    background = palette[color].main;
                }

                return background;
            },
        },

        '& svg, svg g': {
            fill: active ? white.main : gradients.dark.state,
        },
    };
}

const collapseIcon = ({ palette: { white, gradients } }: any, { active }: { active: boolean }) => ({
    color: active ? white.main : gradients.dark.state,
});

function collapseText(
    theme: Theme,
    ownerState: { miniSideNav: boolean; transparentSideNav: boolean; active: boolean },
) {
    const { typography, transitions, breakpoints, functions } = theme;
    const { miniSideNav, transparentSideNav, active } = ownerState;

    const { size, fontWeightMedium, fontWeightRegular } = typography;
    const { pxToRem } = functions;

    return {
        marginLeft: pxToRem(12.8),

        [breakpoints.up('xl')]: {
            opacity: miniSideNav || (miniSideNav && transparentSideNav) ? 0 : 1,
            maxWidth: miniSideNav || (miniSideNav && transparentSideNav) ? 0 : '100%',
            marginLeft: miniSideNav || (miniSideNav && transparentSideNav) ? 0 : pxToRem(12.8),
            transition: transitions.create(['opacity', 'margin'], {
                easing: transitions.easing.easeInOut,
                duration: transitions.duration.standard,
            }),
        },

        '& span': {
            fontWeight: active ? fontWeightMedium : fontWeightRegular,
            fontSize: size.sm,
            lineHeight: 0,
        },
    };
}

export { collapseItem, collapseIconBox, collapseIcon, collapseText };
