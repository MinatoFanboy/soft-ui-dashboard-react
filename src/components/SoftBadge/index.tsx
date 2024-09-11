// Custom styles for the SoftBadge
import SoftBadgeRoot from './SoftBadgeRoot';

interface SoftBadgeProps {
    color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark';
    variant?: 'gradient' | 'contained';
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
    circular: PropTypes.bool,
    indicator: PropTypes.bool,
    border: PropTypes.bool,
    children: PropTypes.node,
    container: PropTypes.bool,
}

const SoftBadge = ({ color, variant, size, circular, indicator, border, container, children, ...rest }) => (
    <SoftBadgeRoot
        {...rest}
        ownerState={{ color, variant, size, circular, indicator, border, container, children }}
        color={'default'}
    >
        {children}
    </SoftBadgeRoot>
);

// Setting default values for the props of SoftBadge
SoftBadge.defaultProps = {
    color: 'info',
    variant: 'gradient',
    size: 'sm',
    circular: false,
    indicator: false,
    border: false,
    children: false,
    container: false,
};

export default SoftBadge;
