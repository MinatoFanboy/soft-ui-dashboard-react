import { ReactNode, useEffect, useState } from 'react';

// react-router-dom components
import { useLocation } from 'react-router-dom';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';

// Soft UI Dashboard React examples
import DashboardLayout from '~/examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from '~/examples/NavBars/DashboardNavbar';
import Footer from '~/examples/Footer';
import SideNav from '~/examples/SideNav';

// Soft UI Dashboard React context
import { useController } from '~/hooks';
import { setMiniSideNav, setLayout, setTransparentSideNav } from '~/context';

// Soft UI Dashboard React routes
import routes from '~/routes';

// Custom styles for the BaseLayout
import { baseLayout, baseLayoutBackground, baseLayoutContent } from './styles';

// Images
import brand from '~/assets/images/logo-ct.png';

function BaseLayout({ children }: { children: ReactNode }) {
    const { dispatch, state } = useController();
    const { miniSideNav, sideNavColor } = state;
    const [onMouseEnter, setOnMouseEnter] = useState(false);
    const { pathname } = useLocation();

    // Open sideNav when mouse enter on mini sideNav
    const handleOnMouseEnter = () => {
        if (miniSideNav && !onMouseEnter) {
            setMiniSideNav(dispatch, false);
            setOnMouseEnter(true);
        }
    };

    // Close sideNav when mouse leave mini sideNav
    const handleOnMouseLeave = () => {
        if (onMouseEnter) {
            setMiniSideNav(dispatch, true);
            setOnMouseEnter(false);
        }
    };

    // Change the document layout to VR for the VR view
    useEffect(() => {
        setLayout(dispatch, 'vr');
        setTransparentSideNav(dispatch, false);
    }, [pathname, dispatch]);

    return (
        <SoftBox sx={baseLayout}>
            <SoftBox mt={3} mx={3}>
                <DashboardNavbar />
            </SoftBox>
            <SoftBox sx={baseLayoutBackground}>
                <SoftBox display={{ xs: 'block', lg: 'none' }}>
                    <SideNav
                        brand={brand}
                        brandName={'Soft UI Dashboard PRO'}
                        routes={routes}
                        onMouseEnter={handleOnMouseEnter}
                        onMouseLeave={handleOnMouseLeave}
                    />
                </SoftBox>
                <SoftBox sx={baseLayoutContent}>
                    <SoftBox display={{ xs: 'none', lg: 'block' }}>
                        <SideNav
                            color={sideNavColor}
                            brand={brand}
                            brandName={'Soft UI Dashboard PRO'}
                            routes={routes}
                            onMouseEnter={handleOnMouseEnter}
                            onMouseLeave={handleOnMouseLeave}
                        />
                    </SoftBox>
                    <DashboardLayout>{children}</DashboardLayout>
                </SoftBox>
            </SoftBox>
            <SoftBox pb={2} pt={0.25}>
                <Footer />
            </SoftBox>
        </SoftBox>
    );
}

export default BaseLayout;
