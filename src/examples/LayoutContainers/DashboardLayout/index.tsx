import { FC, PropsWithChildren, useEffect } from 'react';

// react-router-dom components
import { useLocation } from 'react-router-dom';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';

// Soft UI Dashboard React context
import { setLayout } from '~/context';
import { useController } from '~/hooks';

const DashboardLayout: FC<PropsWithChildren> = ({ children }) => {
    const { dispatch, state } = useController();
    const { miniSideNav } = state;
    const { pathname } = useLocation();

    useEffect(() => {
        setLayout(dispatch, 'dashboard');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <SoftBox
            sx={({ breakpoints, transitions, functions: { pxToRem } }) => ({
                p: 3,
                position: 'relative',

                [breakpoints.up('xl')]: {
                    marginLeft: miniSideNav ? pxToRem(120) : pxToRem(274),
                    transition: transitions.create(['margin-left', 'margin-right'], {
                        easing: transitions.easing.easeInOut,
                        duration: transitions.duration.standard,
                    }),
                },
            })}
        >
            {children}
        </SoftBox>
    );
};

export default DashboardLayout;
