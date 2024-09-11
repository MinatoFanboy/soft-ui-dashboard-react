import { FC, useEffect, useState } from 'react';

// react-router components
import { Link, useLocation } from 'react-router-dom';

// @material-ui core components
import { AppBar, Icon, IconButton, Menu, Toolbar } from '@mui/material';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';
import SoftInput from '~/components/SoftInput';
import SoftTypography from '~/components/SoftTypography';

// Soft UI Dashboard React examples
import Breadcrumbs from '~/examples/Breadcrumbs';
import NotificationItem from '~/examples/Items/NotificationItem';

// Soft UI Dashboard React context
import { useController } from '~/hooks';
import { setMiniSideNav, setOpenConfiguration, setTransparentNavbar } from '~/context';

// Custom styles for DashboardNavbar
import { navbar, navbarContainer, navbarIconButton, navbarMobileMenu, navbarRow } from './styles';

// Images
import team2 from '~/assets/images/team-2.jpg';
import logoSpotify from '~/assets/images/small-logos/logo-spotify.svg';

interface DashboardNavbarProps {
    absolute?: boolean;
    light?: boolean;
    isMini?: boolean;
}

const DashboardNavbar: FC<DashboardNavbarProps> = ({ absolute = false, light = false, isMini = false }) => {
    const { dispatch, state } = useController();

    const [navbarType, setNavbarType] = useState<'sticky' | 'static' | undefined>();
    const [openMenu, setOpenMenu] = useState<boolean>(false);

    const route = useLocation().pathname.split('/').slice(1);

    const { fixedNavbar, miniSideNav, openConfiguration, transparentNav } = state;

    const handleMiniSideNav = () => setMiniSideNav(dispatch, !miniSideNav);
    const handleConfigurationOpen = () => setOpenConfiguration(dispatch, !openConfiguration);
    const handleOpenMenu = (event: any) => setOpenMenu(event.currentTarget);
    const handleCloseMenu = () => setOpenMenu(false);

    useEffect(() => {
        // Setting the navbar type
        if (fixedNavbar) {
            setNavbarType('sticky');
        } else {
            setNavbarType('static');
        }

        // A function that sets the transparent state of the navbar.
        function handleTransparentNavbar() {
            setTransparentNavbar(dispatch, (fixedNavbar && window.scrollY === 0) || !fixedNavbar);
        }

        /** 
         The event listener that's calling the handleTransparentNavbar function when 
         scrolling the window.
        */
        window.addEventListener('scroll', handleTransparentNavbar);

        // Call the handleTransparentNavbar function to set the state with the initial value.
        handleTransparentNavbar();

        // Remove event listener on cleanup
        return () => window.removeEventListener('scroll', handleTransparentNavbar);
    }, [dispatch, fixedNavbar]);

    // Render the notifications menu
    const _renderMenu = () => (
        <Menu
            anchorEl={openMenu as any}
            anchorReference={undefined}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            open={Boolean(openMenu)}
            onClose={handleCloseMenu}
            sx={{ mt: 2 }}
        >
            <NotificationItem
                image={<img src={team2} alt={'person'} />}
                title={['New message', 'from Laur'] as any}
                date={'13 minutes ago'}
                onClick={handleCloseMenu}
            />
            <NotificationItem
                image={<img src={logoSpotify} alt={'person'} />}
                title={['New album', 'by Travis Scott'] as any}
                date={'1 day'}
                onClick={handleCloseMenu}
            />
            <NotificationItem
                color={'secondary'}
                image={
                    <Icon fontSize={'small'} sx={{ color: ({ palette: { white } }) => white.main }}>
                        payment
                    </Icon>
                }
                title={['', 'Payment successfully completed'] as any}
                date={'2 days'}
                onClick={handleCloseMenu}
            />
        </Menu>
    );

    return (
        <AppBar
            color={'inherit'}
            position={absolute ? 'absolute' : navbarType}
            sx={(theme) => navbar(theme, { absolute, light, transparentNav })}
        >
            <Toolbar sx={(theme) => navbarContainer(theme)}>
                <SoftBox color={'inherit'} mb={{ xs: 1, md: 0 }} sx={(theme) => navbarRow(theme, { isMini })}>
                    <Breadcrumbs icon={'home'} title={route[route.length - 1]} route={route} light={light} />
                </SoftBox>

                {isMini ? null : (
                    <SoftBox sx={(theme) => navbarRow(theme, { isMini })}>
                        <SoftBox pr={1}>
                            <SoftInput placeholder={'Type here...'} icon={{ component: 'search', direction: 'left' }} />
                        </SoftBox>
                        <SoftBox color={light ? 'white' : 'inherit'}>
                            <Link to={'/authentication/sign-in'}>
                                <IconButton sx={navbarIconButton} size={'small'}>
                                    <Icon
                                        sx={({ palette: { dark, white } }) => ({
                                            color: light ? white.main : dark.main,
                                        })}
                                    >
                                        account_circle
                                    </Icon>
                                    <SoftTypography
                                        variant={'button'}
                                        fontWeight={'medium'}
                                        color={light ? 'white' : 'dark'}
                                    >
                                        Sign in
                                    </SoftTypography>
                                </IconButton>
                            </Link>
                            <IconButton
                                size={'small'}
                                color={'inherit'}
                                sx={navbarMobileMenu}
                                onClick={handleMiniSideNav}
                            >
                                <Icon className={light ? 'text-white' : 'text-dark'}>
                                    {miniSideNav ? 'menu_open' : 'menu'}
                                </Icon>
                            </IconButton>
                            <IconButton
                                size={'small'}
                                color={'inherit'}
                                sx={navbarIconButton}
                                onClick={handleConfigurationOpen}
                            >
                                <Icon>settings</Icon>
                            </IconButton>
                            <IconButton
                                aria-controls={'notification-menu'}
                                aria-haspopup={'true'}
                                color={'inherit'}
                                size={'small'}
                                sx={navbarIconButton}
                                onClick={handleOpenMenu}
                            >
                                <Icon className={light ? 'text-white' : 'text-dark'}>notifications</Icon>
                            </IconButton>
                            {_renderMenu()}
                        </SoftBox>
                    </SoftBox>
                )}
            </Toolbar>
        </AppBar>
    );
};

export default DashboardNavbar;
