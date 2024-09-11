// @mui material components
import { createTheme } from '@mui/material/styles';

// Soft UI Dashboard React base styles
import colors from './/base/colors';
import breakpoints from './/base/breakpoints';
import typography from './/base/typography';
import boxShadows from './/base/boxShadows';
import borders from './/base/borders';

// Soft UI Dashboard React helper functions
import boxShadow from './functions/boxShadow';
import hexToRgb from './functions/hexToRgb';
import linearGradient from './functions/linearGradient';
import pxToRem from './functions/pxToRem';
import rgba from './functions/rgba';
import globals from './base/globals';

// Soft UI Dashboard React components base styles for @mui material components
import sidenav from './components/sidenav';
import list from './components/list';
import listItem from './components/list/listItem';
import listItemText from './components/list/listItemText';
import card from './components/card';
import cardMedia from './components/card/cardMedia';
import cardContent from './components/card/cardContent';
import button from './components/button';
import iconButton from './components/iconButton';
import inputBase from './components/form/inputBase';
import menu from './components/menu';
import menuItem from './components/menu/menuItem';
import switchButton from './components/form/switchButton';
import divider from './components/divider';
import tableContainer from './components/table/tableContainer';
import tableHead from './components/table/tableHead';
import tableCell from './components/table/tableCell';
import linearProgress from './components/linearProgress';
import breadcrumbs from './components/breadcrumbs';
import slider from './components/slider';
import avatar from './components/avatar';
import tooltip from './components/tooltip';
import appBar from './components/appBar';
import tabs from './components/tabs';
import tab from './components/tabs/tab';
import stepper from './components/stepper';
import step from './components/stepper/step';
import stepConnector from './components/stepper/stepConnector';
import stepLabel from './components/stepper/stepLabel';
import stepIcon from './components/stepper/stepIcon';
import select from './components/form/select';
import formControlLabel from './components/form/formControlLabel';
import formLabel from './components/form/formLabel';
import checkbox from './components/form/checkbox';
import radio from './components/form/radio';
import autocomplete from './components/form/autocomplete';
import input from './components/form/input';
import container from './components/container';
import popover from './components/popover';
import buttonBase from './components/buttonBase';
import icon from './components/icon';
import link from './components/link';
import svgIcon from './components/svgIcon';

declare module '@mui/material/styles' {
    interface Palette {
        black: {
            main: string;
            focus: string;
        };

        dark: {
            main: string;
            focus: string;
        };

        light: {
            main: string;
            focus: string;
        };

        white: {
            main: string;
            focus: string;
        };

        transparent: {
            main: string;
        };

        gradients: {
            primary: {
                main: string;
                state: string;
            };

            secondary: {
                main: string;
                state: string;
            };

            info: {
                main: string;
                state: string;
            };

            success: {
                main: string;
                state: string;
            };

            warning: {
                main: string;
                state: string;
            };

            error: {
                main: string;
                state: string;
            };

            light: {
                main: string;
                state: string;
            };

            dark: {
                main: string;
                state: string;
            };
        };

        inputColors: {
            borderColor: { main: string; focus: string };
            boxShadow: string;
            error: string;
            success: string;
        };
    }

    interface PaletteOptions {
        black?: {
            main: string;
            focus: string;
        };

        light?: {
            main: string;
            focus: string;
        };

        dark?: {
            main: string;
            focus: string;
        };

        white?: {
            main: string;
            focus: string;
        };

        transparent?: {
            main: string;
        };

        gradients?: {
            primary: {
                main: string;
                state: string;
            };

            secondary: {
                main: string;
                state: string;
            };

            info: {
                main: string;
                state: string;
            };

            success: {
                main: string;
                state: string;
            };

            warning: {
                main: string;
                state: string;
            };

            error: {
                main: string;
                state: string;
            };

            light: {
                main: string;
                state: string;
            };

            dark: {
                main: string;
                state: string;
            };
        };

        inputColors?: {
            borderColor: { main: string; focus: string };
            boxShadow: string;
            error: string;
            success: string;
        };
    }

    interface PaletteColor {
        focus?: string;
    }

    interface TypeText {
        main?: string;
        focus?: string;
    }

    interface TypographyOptions {
        lineHeight?: number;
    }

    interface TypographyVariants {
        size: {
            xxs: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    }

    interface TypographyVariantsOptions {
        size?: {
            xxs: string;
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
        };
    }

    interface Theme {
        boxShadows: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
            inset: string;
            navbarBoxShadow: string;
            buttonBoxShadow: {
                main: string;
                stateOf: string;
                stateOfNotHover: string;
            };
            inputBoxShadow: {
                focus: string;
                error: string;
                success: string;
            };
            sliderBoxShadow: {
                thumb: string;
            };
            tabsBoxShadow: {
                indicator: string;
            };
        };
        borders: {
            borderColor: string;
            borderWidth: {
                0: number;
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
            };
            borderRadius: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                xxl: string;
                section: string;
            };
        };
        functions: {
            boxShadow: (offset: number[], radius: number[], color: string, opacity: number, inset?: string) => string;
            hexToRgb: (color: string) => string;
            linearGradient: (color: string, colorState: string, angle?: number) => string;
            pxToRem: (number: number, baseNumber?: number) => string;
            rgba: (color: string, opacity: number) => string;
        };
    }

    interface ThemeOptions {
        boxShadows?: {
            xs: string;
            sm: string;
            md: string;
            lg: string;
            xl: string;
            xxl: string;
            inset: string;
            navbarBoxShadow: string;
            buttonBoxShadow: {
                main: string;
                stateOf: string;
                stateOfNotHover: string;
            };
            inputBoxShadow: {
                focus: string;
                error: string;
                success: string;
            };
            sliderBoxShadow: {
                thumb: string;
            };
            tabsBoxShadow: {
                indicator: string;
            };
        };
        borders?: {
            borderColor: string;
            borderWidth: {
                0: number;
                1: string;
                2: string;
                3: string;
                4: string;
                5: string;
            };
            borderRadius: {
                xs: string;
                sm: string;
                md: string;
                lg: string;
                xl: string;
                xxl: string;
                section: string;
            };
        };
        functions?: {
            boxShadow: (offset: number[], radius: number[], color: string, opacity: number, inset?: string) => string;
            hexToRgb: (color: string) => string;
            linearGradient: (color: string, colorState: string, angle?: number) => string;
            pxToRem: (number: number, baseNumber?: number) => string;
            rgba: (color: string, opacity: number) => string;
        };
    }
}

export default createTheme({
    direction: 'rtl',
    breakpoints: { ...breakpoints },
    palette: { ...colors },
    typography: { ...typography },
    boxShadows: { ...boxShadows },
    borders: { ...borders },
    functions: {
        boxShadow,
        hexToRgb,
        linearGradient,
        pxToRem,
        rgba,
    },

    components: {
        MuiCssBaseline: {
            styleOverrides: {
                ...globals,
                ...container,
            },
        },
        MuiDrawer: { ...sidenav },
        MuiList: { ...list },
        MuiListItem: { ...listItem },
        MuiListItemText: { ...listItemText },
        MuiCard: { ...card },
        MuiCardMedia: { ...cardMedia },
        MuiCardContent: { ...cardContent },
        MuiButton: { ...button },
        MuiIconButton: { ...iconButton },
        MuiInputBase: { ...inputBase },
        MuiMenu: { ...menu },
        MuiMenuItem: { ...menuItem },
        MuiSwitch: { ...switchButton },
        MuiDivider: { ...divider },
        MuiTableContainer: { ...tableContainer },
        MuiTableHead: { ...tableHead },
        MuiTableCell: { ...tableCell },
        MuiLinearProgress: { ...linearProgress },
        MuiBreadcrumbs: { ...breadcrumbs },
        MuiSlider: { ...slider },
        MuiAvatar: { ...avatar },
        MuiTooltip: { ...tooltip },
        MuiAppBar: { ...appBar },
        MuiTabs: { ...tabs },
        MuiTab: { ...tab },
        MuiStepper: { ...stepper },
        MuiStep: { ...step },
        MuiStepConnector: { ...stepConnector },
        MuiStepLabel: { ...stepLabel },
        MuiStepIcon: { ...stepIcon },
        MuiSelect: { ...select },
        MuiFormControlLabel: { ...formControlLabel },
        MuiFormLabel: { ...formLabel },
        MuiCheckbox: { ...checkbox },
        MuiRadio: { ...radio },
        MuiAutocomplete: { ...autocomplete },
        MuiInput: { ...input },
        MuiOutlinedInput: { ...input },
        MuiFilledInput: { ...input },
        MuiPopover: { ...popover },
        MuiButtonBase: { ...buttonBase },
        MuiIcon: { ...icon },
        MuiLink: { ...link },
        MuiSvgIcon: { ...svgIcon },
    },
});
