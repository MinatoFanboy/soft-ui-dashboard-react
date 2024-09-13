// Soft UI Dashboard React helper functions
import pxToRem from '../functions/pxToRem';

// Soft UI Dashboard React base styles
import colors from '../base/colors';
import boxShadows from '../base/boxShadows';
import borders from '../base/borders';

const { transparent } = colors;
const { lg } = boxShadows;
const { borderRadius } = borders;

const popover = {
    styleOverrides: {
        paper: {
            backgroundColor: `${transparent.main} !important`,
            boxShadow: `${lg} !important`,
            padding: `${pxToRem(8)} !important`,
            borderRadius: `${borderRadius.lg} !important`,
        },
    },
};

export default popover;
