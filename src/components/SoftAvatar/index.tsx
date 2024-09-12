import { forwardRef } from 'react';

import { AvatarProps } from '@mui/material';

// Custom styles for SoftAvatar
import SoftAvatarRoot from './SoftAvatarRoot';

interface SoftAvatarProps extends AvatarProps {
    bgColor?: 'transparent' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    shadow?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'inset';
}

const SoftAvatar = forwardRef(
    (
        { bgColor = 'transparent', size = 'md', shadow = 'none', ...rest }: SoftAvatarProps,
        ref: React.Ref<HTMLDivElement>,
    ) => <SoftAvatarRoot ref={ref} ownerState={{ shadow, bgColor, size }} {...rest} />,
);

export default SoftAvatar;
