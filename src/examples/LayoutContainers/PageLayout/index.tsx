import { ReactNode, useEffect } from 'react';

// react-router-dom components
import { useLocation } from 'react-router-dom';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';

// Soft UI Dashboard React context
import { useController } from '~/hooks';
import { setLayout } from '~/context';

function PageLayout({
    background = 'default',
    children,
}: {
    background?: 'white' | 'light' | 'default';
    children: ReactNode;
}) {
    const { dispatch } = useController();
    const { pathname } = useLocation();

    useEffect(() => {
        setLayout(dispatch, 'page');
    }, [dispatch, pathname]);

    return (
        <SoftBox width={'100vw'} height={'100%'} minHeight={'100vh'} bgColor={background} sx={{ overflowX: 'hidden' }}>
            {children}
        </SoftBox>
    );
}

export default PageLayout;
