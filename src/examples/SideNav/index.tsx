import { FC, useEffect } from 'react';

// react-router-dom components
import { useLocation, NavLink } from 'react-router-dom';

// @mui material components
import { Divider, Icon, Link, List, Theme } from '@mui/material';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';
import SoftButton from '~/components/SoftButton';
import SoftTypography from '~/components/SoftTypography';

// Custom styles for the SideNav
import SideNavRoot from './SideNavRoot';
import sideNavLogoLabel from './styles/sideNav';

// Soft UI Dashboard React examples
import SideNavCollapse from './SideNavCollapse';
import SideNavCard from './SideNavCard';

/** Hook context */
import { useController } from '~/hooks';
import { setMiniSideNav } from '~/context';
import { IRoute } from '~/types';

interface SideNavProps {
    color: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark';
    brand: string;
    brandName: string;
    routes: IRoute[];
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

const SideNav: FC<SideNavProps> = ({ color, brand, brandName, routes, ...rest }) => {
    const { dispatch, state } = useController();
    const { transparentSideNav, miniSideNav } = state;
    const location = useLocation();
    const { pathname } = location;
    const collapseName = pathname.split('/').slice(1)[0];

    const closeSideNav = () => setMiniSideNav(dispatch, true);

    useEffect(() => {
        // A function that sets the mini state of the sideNav.
        function handleMiniSideNav() {
            setMiniSideNav(dispatch, window.innerWidth < 1200);
        }

        /** 
            The event listener that's calling the handleMiniSideNav function when resizing the window.
        */
        window.addEventListener('resize', handleMiniSideNav);

        // Call the handleMiniSideNav function to set the state with the initial value.
        handleMiniSideNav();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleMiniSideNav);
    }, [dispatch, location]);

    // Render all the routes from the routes.js (All the visible items on the SideNav)
    const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, route, href }) => {
        let returnValue;

        if (type === 'collapse') {
            returnValue = href ? (
                <Link href={href} key={key} target={'_blank'} rel={'noreferrer'} sx={{ textDecoration: 'none' }}>
                    <SideNavCollapse
                        color={color}
                        name={name}
                        icon={icon}
                        active={key === collapseName}
                        nocollapse={`${noCollapse}`}
                    />
                </Link>
            ) : (
                <NavLink to={route || '/'} key={key}>
                    <SideNavCollapse
                        color={color}
                        key={key}
                        name={name}
                        icon={icon}
                        active={key === collapseName}
                        nocollapse={`${noCollapse}`}
                    />
                </NavLink>
            );
        } else if (type === 'title') {
            returnValue = (
                <SoftTypography
                    key={key}
                    display={'block'}
                    variant={'caption'}
                    fontWeight={'bold'}
                    textTransform={'uppercase'}
                    opacity={0.6}
                    pl={3}
                    mt={2}
                    mb={1}
                    ml={1}
                >
                    {title}
                </SoftTypography>
            );
        } else if (type === 'divider') {
            returnValue = <Divider key={key} />;
        }

        return returnValue;
    });

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

                <SoftBox component={NavLink} to={'/'} display={'flex'} alignItems={'center'}>
                    {brand && <SoftBox component={'img'} src={brand} alt={'Soft UI Logo'} width={'2rem'} />}
                    <SoftBox
                        width={!brandName ? '100%' : undefined}
                        sx={(theme: Theme) => sideNavLogoLabel(theme, { miniSideNav })}
                    >
                        <SoftTypography component={'h6'} variant={'button'} fontWeight={'medium'}>
                            {brandName}
                        </SoftTypography>
                    </SoftBox>
                </SoftBox>
            </SoftBox>

            <Divider />
            <List>{renderRoutes}</List>

            <SoftBox pt={2} my={2} mx={2} mt={'auto'}>
                <SideNavCard />
                <SoftBox mt={2}>
                    <SoftButton
                        component={'a'}
                        href={'https://creative-tim.com/product/soft-ui-dashboard-pro-react'}
                        target={'_blank'}
                        rel={'noreferrer'}
                        variant={'gradient'}
                        color={color}
                        fullWidth
                    >
                        upgrade to pro
                    </SoftButton>
                </SoftBox>
            </SoftBox>
        </SideNavRoot>
    );
};

export default SideNav;
