import { FC } from 'react';

// @mui material components
import { Icon } from '@mui/material';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';
import SoftTypography from '~/components/SoftTypography';

// Custom styles for the SideNav
import SideNavRoot from './SideNavRoot';

/** Hook context */
import { useController } from '~/hooks';
import { setMiniSideNav } from '~/context';

const SideNav: FC = ({ ...rest }) => {
    const { dispatch, state } = useController();
    const { transparentSideNav, miniSideNav } = state;

    const closeSideNav = () => setMiniSideNav(dispatch, true);

    return (
        <SideNavRoot {...rest} variant={'permanent'} ownerState={{ transparentSideNav, miniSideNav }}>
            <SoftBox pt={3} pb={1} px={4} textAlign={'center'}>
                <SoftBox
                    display={{ xs: 'block', xl: 'none' }}
                    position={'absolute'}
                    top={0}
                    right={0}
                    p={1.625}
                    onClick={closeSideNav}
                    sx={{ cursor: 'pointer' }}
                >
                    <SoftTypography variant={'h6'} color={'secondary'}>
                        <Icon sx={{ fontWeight: 'bold' }}>close</Icon>
                    </SoftTypography>
                </SoftBox>
            </SoftBox>
        </SideNavRoot>
    );
};

export default SideNav;
