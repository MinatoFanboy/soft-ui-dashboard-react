import { ReactNode } from 'react';
import { TypographyProps } from '@mui/material';

// Custom styles for SoftTypography
import SoftTypographyRoot from './SoftTypographyRoot';

type SoftTypographyProps<C extends React.ElementType> = {
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
} & TypographyProps<C, { component?: C }>;

const SoftTypography = <C extends React.ElementType = 'span'>(props: SoftTypographyProps<C>) => {
    const {
        color = 'dark',
        fontWeight = undefined,
        textTransform = 'none',
        verticalAlign = 'unset',
        textGradient = false,
        opacity = 1,
        children,
        ...rest
    } = props;

    return (
        <SoftTypographyRoot
            {...rest}
            ownerState={{ color, textTransform, verticalAlign, fontWeight, opacity, textGradient }}
        >
            {children}
        </SoftTypographyRoot>
    );
};

export default SoftTypography;
