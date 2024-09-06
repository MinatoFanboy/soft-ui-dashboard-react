import { forwardRef } from 'react';

// Custom styles for SoftBox
import SoftBoxRoot from './SoftBoxRoot';
import { BoxProps } from '@mui/material';

interface SoftBoxProps extends BoxProps {
    variant?: 'contained' | 'gradient';
    bgColor?: string;
    color?: string;
    opacity?: number;
    borderRadius?: string;
    shadow?: string;
}

const SoftBox = forwardRef(
    (
        {
            variant = 'contained',
            bgColor = 'transparent',
            color = 'dark',
            opacity = 1,
            borderRadius = 'none',
            shadow = 'none',
            ...rest
        }: SoftBoxProps,
        ref,
    ) => {
        return (
            <SoftBoxRoot {...rest} ref={ref} ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow }} />
        );
    },
);

export default SoftBox;
