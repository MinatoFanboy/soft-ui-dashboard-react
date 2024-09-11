// Custom styles for SoftBox
import SoftBoxRoot from './SoftBoxRoot';
import { BoxProps } from '@mui/material';

type SoftBoxProps<C extends React.ElementType> = {
    component?: C;
    variant?: 'contained' | 'gradient';
    bgColor?: string;
    color?: string;
    opacity?: number;
    borderRadius?: string;
    shadow?: string;
} & BoxProps<C, { component?: C }>;

const SoftBox = <C extends React.ElementType = 'div'>(props: SoftBoxProps<C>) => {
    const {
        variant = 'contained',
        bgColor = 'transparent',
        color = 'dark',
        opacity = 1,
        borderRadius = 'none',
        shadow = 'none',
        ...rest
    } = props;

    return <SoftBoxRoot {...rest} ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow }} />;
};

export default SoftBox;
