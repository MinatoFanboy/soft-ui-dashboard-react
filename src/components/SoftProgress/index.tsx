// Soft UI Dashboard React components
import SoftTypography from '../SoftTypography';

// Custom styles for SoftProgress
import SoftProgressRoot from './SoftProgressRoot';

type SoftProgressProps = {
    variant?: 'contained' | 'gradient';
    color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark';
    value?: number;
    label?: boolean;
};

const SoftProgress = ({
    variant = 'contained',
    color = 'info',
    value = 0,
    label = false,
    ...rest
}: SoftProgressProps) => (
    <>
        {label && (
            <SoftTypography variant={'button'} fontWeight={'medium'} color={'text'}>
                {value}%
            </SoftTypography>
        )}
        <SoftProgressRoot {...rest} variant={'determinate'} value={value} ownerState={{ color, value, variant }} />
    </>
);

export default SoftProgress;
