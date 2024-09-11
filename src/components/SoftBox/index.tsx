import { forwardRef } from 'react';

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

const SoftBox = forwardRef(<C extends React.ElementType = 'div'>(props: SoftBoxProps<C>, ref: React.Ref<Element>) => {
    const {
        variant = 'contained',
        bgColor = 'transparent',
        color = 'dark',
        opacity = 1,
        borderRadius = 'none',
        shadow = 'none',
        ...rest
    } = props;

    return <SoftBoxRoot ref={ref} {...rest} ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow }} />;
});

export default SoftBox;
