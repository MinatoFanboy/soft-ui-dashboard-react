import { ReactNode } from 'react';
import { TypographyProps } from '@mui/material';

// Custom styles for SoftTypography
import SoftTypographyRoot from './SoftTypographyRoot';

interface SoftTypographyProps extends TypographyProps {
    color?:
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
    fontWeight?: 'light' | 'regular' | 'medium' | 'bold';
    textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase';
    verticalAlign?: 'unset' | 'baseline' | 'sub' | 'super' | 'text-top' | 'text-bottom' | 'middle' | 'top' | 'bottom';
    textGradient?: boolean;
    children: ReactNode;
    opacity?: number;
}

const SoftTypography = ({
    color = 'dark',
    fontWeight = undefined,
    textTransform = 'none',
    verticalAlign = 'unset',
    textGradient = false,
    opacity = 1,
    children,
    ...rest
}: SoftTypographyProps) => (
    <SoftTypographyRoot
        {...rest}
        ownerState={{ color, textTransform, verticalAlign, fontWeight, opacity, textGradient }}
    >
        {children}
    </SoftTypographyRoot>
);

export default SoftTypography;
