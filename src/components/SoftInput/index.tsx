import { FC, ReactNode } from 'react';

// Custom styles for SoftInput
import SoftInputRoot from './SoftInputRoot';
import SoftInputWithIconRoot from './SoftInputWithIconRoot';
import SoftInputIconBoxRoot from './SoftInputIconBoxRoot';
import SoftInputIconRoot from './SoftInputIconRoot';

// Soft UI Dashboard React contexts
import { useController } from '~/hooks';
import { InputBaseProps } from '@mui/material';

interface SoftInputIconProps {
    component: ReactNode | boolean;
    direction: 'none' | 'left' | 'right';
}

type SoftInputProps = {
    size?: 'small' | 'medium' | 'large';
    icon?: SoftInputIconProps;
    error?: boolean;
    success?: boolean;
    disabled?: boolean;
} & InputBaseProps;

const SoftInput: FC<SoftInputProps> = ({
    size = 'medium',
    icon = { component: false, direction: 'none' },
    error = false,
    success = false,
    disabled = false,
    ...rest
}) => {
    let template;
    const { state } = useController();
    const { direction } = state;
    const iconDirection = icon.direction;

    if (icon.component && icon.direction === 'left') {
        template = (
            <SoftInputWithIconRoot ownerState={{ error, success, disabled }}>
                <SoftInputIconBoxRoot ownerState={{ size }}>
                    <SoftInputIconRoot fontSize={'small'} ownerState={{ size }}>
                        {icon.component}
                    </SoftInputIconRoot>
                </SoftInputIconBoxRoot>
                <SoftInputRoot {...rest} ownerState={{ size, error, success, iconDirection, direction, disabled }} />
            </SoftInputWithIconRoot>
        );
    } else if (icon.component && icon.direction === 'right') {
        template = (
            <SoftInputWithIconRoot ownerState={{ error, success, disabled }}>
                <SoftInputRoot {...rest} ownerState={{ size, error, success, iconDirection, direction, disabled }} />
                <SoftInputIconBoxRoot ownerState={{ size }}>
                    <SoftInputIconRoot fontSize={'small'} ownerState={{ size }}>
                        {icon.component}
                    </SoftInputIconRoot>
                </SoftInputIconBoxRoot>
            </SoftInputWithIconRoot>
        );
    } else {
        template = <SoftInputRoot {...rest} ownerState={{ size, error, success, disabled }} />;
    }

    return template;
};

export default SoftInput;
