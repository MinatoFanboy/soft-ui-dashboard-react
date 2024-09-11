import { Theme } from '@mui/material';

export default function sideNavLogoLabel(theme: Theme, ownerState: { miniSideNav: boolean }) {
    const { functions, transitions, typography, breakpoints } = theme;
    const { miniSideNav } = ownerState;

    const { pxToRem } = functions;
    const { fontWeightMedium } = typography;

    return {
        ml: 0.5,
        fontWeight: fontWeightMedium,
        wordSpacing: pxToRem(-1),
        transition: transitions.create('opacity', {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
        }),

        [breakpoints.up('xl')]: {
            opacity: miniSideNav ? 0 : 1,
        },
    };
}
