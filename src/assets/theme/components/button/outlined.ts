import colors from '../../base/colors';
import typography from '../../base/typography';
import boxShadows from '../../base/boxShadows';

import pxToRem from '../../functions/pxToRem';

const { info, light, secondary, transparent } = colors;
const { size } = typography;
const { buttonBoxShadow } = boxShadows;

const outlined = {
    base: {
        minHeight: pxToRem(42),
        color: light.main,
        border: light.main,
        padding: `${pxToRem(12)} ${pxToRem(24)}`,

        '&:hover': {
            backgroundColor: transparent.main,
            opacity: 0.75,
        },

        '&:focus:not(:hover)': {
            boxShadow: buttonBoxShadow.stateOfNotHover,
        },

        '& .material-icon, .material-icon-round, svg': {
            fontSize: `${pxToRem(16)} !important`,
        },
    },

    small: {
        minHeight: pxToRem(34),
        padding: `${pxToRem(8)} ${pxToRem(32)}`,
        fontSize: size.xs,

        '& .material-icon, .material-icon-round, svg': {
            fontSize: `${pxToRem(12)} !important`,
        },
    },

    large: {
        minHeight: pxToRem(49),
        padding: `${pxToRem(14)} ${pxToRem(64)}`,
        fontSize: size.sm,

        '& .material-icon, .material-icon-round, svg': {
            fontSize: `${pxToRem(22)} !important`,
        },
    },

    primary: {
        backgroundColor: transparent.main,
        borderColor: info.main,

        '&:hover': {
            backgroundColor: transparent.main,
        },

        '&:focus:not(:hover)': {
            boxShadow: buttonBoxShadow.stateOfNotHover,
        },
    },

    secondary: {
        backgroundColor: transparent.main,
        borderColor: secondary.main,

        '&:hover': {
            backgroundColor: transparent.main,
        },

        '&:focus:not(:hover)': {
            boxShadow: buttonBoxShadow.stateOfNotHover,
        },
    },
};

export default outlined;
