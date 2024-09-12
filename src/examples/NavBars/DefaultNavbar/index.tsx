import { useState, useEffect } from 'react';

// react-router components
import { Link } from 'react-router-dom';

// @mui material components
import { Container, Icon, Theme } from '@mui/material';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';
import SoftTypography from '~/components/SoftTypography';
import SoftButton from '~/components/SoftButton';

// Soft UI Dashboard React examples
import DefaultNavbarLink from './DefaultNavbarLink';
import DefaultNavbarMobile from './DefaultNavbarMobile';

// Soft UI Dashboard React base styles
import breakpoints from '~/assets/theme/base/breakpoints';

// Typechecking props for the DefaultNavbar
interface DefaultNavbarProps {
    transparent?: boolean;
    light?: boolean;
    action?:
        | boolean
        | {
              type: 'external' | 'internal';
              route: string;
              color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light';
              label: string;
          };
}

function DefaultNavbar({ transparent = false, light = false, action = false }: DefaultNavbarProps) {
    const [mobileNavbar, setMobileNavbar] = useState<HTMLElement | boolean>(false);
    const [mobileView, setMobileView] = useState(false);

    const openMobileNavbar = ({ currentTarget }: React.MouseEvent<HTMLElement>) =>
        setMobileNavbar(currentTarget.parentNode as HTMLElement);
    const closeMobileNavbar = () => setMobileNavbar(false);

    useEffect(() => {
        // A function that sets the display state for the DefaultNavbarMobile.
        function displayMobileNavbar() {
            if (window.innerWidth < breakpoints.values.lg) {
                setMobileView(true);
                setMobileNavbar(false);
            } else {
                setMobileView(false);
                setMobileNavbar(false);
            }
        }

        /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
        window.addEventListener('resize', displayMobileNavbar);

        // Call the displayMobileNavbar function to set the state with the initial value.
        displayMobileNavbar();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', displayMobileNavbar);
    }, []);

    return (
        <Container>
            <SoftBox
                py={1.5}
                px={{ xs: transparent ? 4 : 5, sm: transparent ? 2 : 5, lg: transparent ? 0 : 5 }}
                my={2}
                mx={3}
                width={'calc(100% - 48px)'}
                borderRadius={'section'}
                shadow={transparent ? 'none' : 'md'}
                color={light ? 'white' : 'dark'}
                display={'flex'}
                justifyContent={'space-between'}
                alignItems={'center'}
                position={'absolute'}
                left={0}
                zIndex={3}
                sx={({ palette: { transparent: transparentColor, white }, functions: { rgba } }: Theme) => ({
                    backgroundColor: transparent ? transparentColor.main : rgba(white.main, 0.8),
                    backdropFilter: transparent ? 'none' : `saturate(200%) blur(30px)`,
                })}
            >
                <SoftBox component={Link} to={'/'} py={transparent ? 1.5 : 0.75} lineHeight={1}>
                    <SoftTypography variant={'button'} fontWeight={'bold'} color={light ? 'white' : 'dark'}>
                        Soft UI Dashboard
                    </SoftTypography>
                </SoftBox>
                <SoftBox color={'inherit'} display={{ xs: 'none', lg: 'flex' }} m={0} p={0}>
                    <DefaultNavbarLink icon={'donut_large'} name={'dashboard'} route={'/dashboard'} light={light} />
                    <DefaultNavbarLink icon={'person'} name={'profile'} route={'/profile'} light={light} />
                    <DefaultNavbarLink
                        icon={'account_circle'}
                        name={'sign up'}
                        route={'/authentication/sign-up'}
                        light={light}
                    />
                    <DefaultNavbarLink icon={'key'} name={'sign in'} route={'/authentication/sign-in'} light={light} />
                </SoftBox>
                {typeof action === 'boolean' ? null : (
                    <>
                        {action.type === 'internal' ? (
                            <SoftBox display={{ xs: 'none', lg: 'inline-block' }}>
                                <SoftButton
                                    component={Link}
                                    to={action.route}
                                    variant={'gradient'}
                                    color={action.color ? action.color : 'info'}
                                    size={'small'}
                                    circular
                                >
                                    {action.label}
                                </SoftButton>
                            </SoftBox>
                        ) : (
                            <SoftBox display={{ xs: 'none', lg: 'inline-block' }}>
                                <SoftButton
                                    component={'a'}
                                    href={action.route}
                                    target={'_blank'}
                                    rel={'noreferrer'}
                                    variant={'gradient'}
                                    color={action.color ? action.color : 'info'}
                                    size={'small'}
                                    circular
                                >
                                    {action.label}
                                </SoftButton>
                            </SoftBox>
                        )}
                    </>
                )}
                <SoftBox
                    display={{ xs: 'inline-block', lg: 'none' }}
                    lineHeight={0}
                    py={1.5}
                    pl={1.5}
                    color={'inherit'}
                    sx={{ cursor: 'pointer' }}
                    onClick={openMobileNavbar}
                >
                    <Icon fontSize={'medium'}>{mobileNavbar ? 'close' : 'menu'}</Icon>
                </SoftBox>
            </SoftBox>
            {mobileView && <DefaultNavbarMobile open={mobileNavbar} close={closeMobileNavbar} light={false} />}
        </Container>
    );
}

export default DefaultNavbar;
