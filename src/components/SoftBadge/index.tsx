import { ReactNode } from 'react';
import { BadgeProps } from '@mui/material';

// Custom styles for the SoftBadge
import SoftBadgeRoot from './SoftBadgeRoot';

type SoftBadgeProps = {
    color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark';
    variant?: 'gradient' | 'contained';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    circular?: boolean;
    indicator?: boolean;
    border?: boolean;
    children?: ReactNode | boolean;
    container?: boolean;
} & BadgeProps;

const SoftBadge = ({
    color = 'info',
    variant = 'gradient' as never,
    size = 'sm',
    circular = false,
    indicator = false,
    border = false,
    container = false,
    children = false,
    ...rest
}: SoftBadgeProps) => (
    <SoftBadgeRoot
        {...rest}
        ownerState={{ color, variant, size, circular, indicator, border, container, children }}
        color={'default'}
    >
        {children}
    </SoftBadgeRoot>
);

export default SoftBadge;
