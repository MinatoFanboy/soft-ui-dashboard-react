import { AvatarProps } from '@mui/material';

// Custom styles for SoftAvatar
import SoftAvatarRoot from './SoftAvatarRoot';

interface SoftAvatarProps extends AvatarProps {
    bgColor?: 'transparent' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    shadow?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'inset';
}

const SoftAvatar = ({ bgColor = 'transparent', size = 'md', shadow = 'none', ...rest }: SoftAvatarProps) => (
    <SoftAvatarRoot ownerState={{ shadow, bgColor, size }} {...rest} />
);

// Setting default values for the props of SoftAvatar
SoftAvatar.defaultProps = {
    bgColor: 'transparent',
    size: 'md',
    shadow: 'none',
};

export default SoftAvatar;
