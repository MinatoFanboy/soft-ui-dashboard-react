// Soft UI Dashboard React base styles
import colors from '../../base/colors';
import borders from '../../base/borders';
import boxShadows from '../../base/boxShadows';

// Soft UI Dashboard React helper functions
import pxToRem from '../../functions/pxToRem';

const { grey, white } = colors;
const { borderRadius } = borders;
const { tabsBoxShadow } = boxShadows;

const tabs = {
    styleOverrides: {
        root: {
            position: 'relative' as const,
            backgroundColor: grey[100],
            borderRadius: borderRadius.lg,
            minHeight: 'unset',
            padding: pxToRem(4),
        },

        flexContainer: {
            height: '100%',
            position: 'relative' as const,
            zIndex: 10,
        },

        fixed: {
            overflow: 'unset !important' as const,
            WebkitOverflow: 'unset' as const,
            overflowX: 'unset' as const,
            WebkitOverflowX: 'unset' as const,
        },

        vertical: {
            '& .MuiTabs-indicator': {
                width: '100%',
            },
        },

        indicator: {
            height: '100%',
            borderRadius: borderRadius.md,
            backgroundColor: white.main,
            boxShadow: tabsBoxShadow.indicator,
            transition: 'all 500ms ease',
        },
    },
};

export default tabs;
