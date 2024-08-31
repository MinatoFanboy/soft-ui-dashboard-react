import colors from '../../base/colors';
import typography from '../../base/typography';
import boxShadows from '../../base/boxShadows';

import pxToRem from '../../functions/pxToRem';

const { info, secodary, text, white } = colors;
const { size } = typography;
const { buttonBoxShadow } = boxShadows;

const contained = {
    base: {
        backgroundColor: white.main,
        minHeight: pxToRem(40),
        color: text.main,
        boxShadow: buttonBoxShadow.main,
        padding: `${pxToRem(12)} ${pxToRem(24)}`,

        '&:hover': {
            backgroundColor: white.main,
            boxShadow: buttonBoxShadow.stateOf,
        },

        '&:focus': {
            boxShadow: buttonBoxShadow.stateOf,
        },

        '&:active, &:active:focus, &:active:hover': {
            opacity: 0.85,
            boxShadow: buttonBoxShadow.stateOf,
        },

        '&:disabled': {
            boxShadow: buttonBoxShadow.main,
        },

        '& .material-icon, .material-icon-round, svg': {
            fontSize: `${pxToRem(16)} !important`,
        },
    },
};

export default contained;
