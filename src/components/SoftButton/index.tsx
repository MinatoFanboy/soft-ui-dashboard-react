import { forwardRef, ReactNode } from 'react';
import { BoxProps } from '@mui/material';

import SoftButtonRoot from './SoftButtonRoot';

type SoftButtonProps<C extends React.ElementType> = {
    component?: C;
    color?: 'white' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark';
    variant?: 'text' | 'contained' | 'outlined' | 'gradient';
    size?: 'small' | 'medium' | 'large';
    circular?: boolean;
    iconOnly?: boolean;
    children: ReactNode;
} & BoxProps<C, { disabled?: boolean; component?: C; fullWidth?: boolean }>;

const SoftButton = forwardRef(
    <C extends React.ElementType = 'div'>(props: SoftButtonProps<C>, ref: React.Ref<Element>) => {
        const {
            color = 'white',
            size = 'medium',
            variant = 'contained',
            circular = false,
            iconOnly = false,
            children,
            ...rest
        } = props;

        return (
            <SoftButtonRoot
                ref={ref}
                {...rest}
                color={'primary'}
                variant={variant === 'gradient' ? 'contained' : variant}
                size={size}
                ownerState={{ color, variant, size, circular, iconOnly }}
            >
                {children}
            </SoftButtonRoot>
        );
    },
);

export default SoftButton;
