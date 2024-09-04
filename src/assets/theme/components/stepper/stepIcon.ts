import borders from '../../base/borders';
import colors from '../../base/colors';
import boxShadow from '../../functions/boxShadow';
import pxToRem from '../../functions/pxToRem';

const { dark, white } = colors;
const { borderWidth, borderColor } = borders;

const stepIcon = {
    styleOverrides: {
        root: {
            background: white.main,
            fill: white.main,
            stroke: white.main,
            strokeWidth: pxToRem(10),
            width: pxToRem(13),
            height: pxToRem(13),
            border: `${borderWidth[2]} solid ${borderColor}`,
            borderRadius: '50%',
            zIndex: 99,
            transition: 'all 200ms linear',

            '&.Mui-active': {
                background: dark.main,
                fill: dark.main,
                stroke: dark.main,
                borderColor: dark.main,
                boxShadow: boxShadow([0, 0], [0, 2], dark.main, 1),
            },

            '&.Mui-completed': {
                background: dark.main,
                fill: dark.main,
                stroke: dark.main,
                borderColor: dark.main,
                boxShadow: boxShadow([0, 0], [0, 2], dark.main, 1),
            },
        },
    },
};

export default stepIcon;
