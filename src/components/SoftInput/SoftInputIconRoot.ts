// @mui material components
import Icon from '@mui/material/Icon';
import { styled } from '@mui/material/styles';

export default styled(Icon)<{ ownerState: { size: 'small' | 'medium' | 'large' } }>(({ theme, ownerState }) => {
    const { typography } = theme;
    const { size } = ownerState;

    const { fontWeightBold, size: fontSize } = typography;

    return {
        fontWeight: fontWeightBold,
        fontSize: size === 'small' ? `${fontSize.md} !important` : undefined,
    };
});
