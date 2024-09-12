// @mui material components
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const SoftTypographyRoot = styled(Typography)<{
    ownerState: {
        color:
            | 'inherit'
            | 'primary'
            | 'secondary'
            | 'info'
            | 'success'
            | 'warning'
            | 'error'
            | 'light'
            | 'dark'
            | 'text'
            | 'white';
        textTransform: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
        verticalAlign:
            | 'unset'
            | 'baseline'
            | 'sub'
            | 'super'
            | 'text-top'
            | 'text-bottom'
            | 'middle'
            | 'top'
            | 'bottom';
        fontWeight: undefined | 'light' | 'regular' | 'medium' | 'bold';
        opacity: number;
        textGradient: boolean;
    };
}>(({ theme, ownerState }) => {
    const { palette, typography, functions } = theme;
    const { color, textTransform, verticalAlign, fontWeight, opacity, textGradient } = ownerState;

    const { gradients, transparent } = palette;
    const { fontWeightLight, fontWeightRegular, fontWeightMedium, fontWeightBold } = typography;
    const { linearGradient } = functions;

    // fontWeight styles
    const fontWeights = {
        light: fontWeightLight,
        regular: fontWeightRegular,
        medium: fontWeightMedium,
        bold: fontWeightBold,
    };

    // styles for the typography with textGradient={true}
    const gradientStyles = () => ({
        backgroundImage:
            color !== 'inherit' && color !== 'text' && color !== 'white' && gradients[color]
                ? linearGradient(gradients[color].main, gradients[color].state)
                : linearGradient(gradients.dark.main, gradients.dark.state),
        display: 'inline-block',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: transparent.main,
        position: 'relative' as const,
        zIndex: 1,
    });

    return {
        opacity,
        textTransform,
        verticalAlign,
        textDecoration: 'none',
        color: color === 'inherit' || !palette[color] ? 'inherit' : palette[color].main,
        fontWeight: fontWeight ? fontWeights[fontWeight] : undefined,
        ...(textGradient && gradientStyles()),
    };
});

export default SoftTypographyRoot;
