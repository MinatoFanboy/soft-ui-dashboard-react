import { useState, useEffect } from 'react';

// @mui material components
import Divider from '@mui/material/Divider';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import Icon from '@mui/material/Icon';

// @mui icons
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';
import SoftTypography from '~/components/SoftTypography';
import SoftButton from '~/components/SoftButton';

// Custom styles for the Configuration
import ConfigurationRoot from './ConfigurationRoot';

// Soft UI Dashboard React context
import { setOpenConfiguration, setTransparentSideNav, setFixedNavbar, setSideNavColor } from '~/context';
import { useController } from '~/hooks';

type IColor = 'primary' | 'dark' | 'info' | 'success' | 'warning' | 'error';

function Configuration() {
    const { dispatch, state } = useController();
    const { openConfiguration, transparentSideNav, fixedNavbar, sideNavColor } = state;
    const [disabled, setDisabled] = useState(false);
    const sideNavColors: IColor[] = ['primary', 'dark', 'info', 'success', 'warning', 'error'];

    // Use the useEffect hook to change the button state for the sideNav type based on window size.
    useEffect(() => {
        // A function that sets the disabled state of the buttons for the sideNav type.
        function handleDisabled() {
            return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
        }

        // The event listener that's calling the handleDisabled function when resizing the window.
        window.addEventListener('resize', handleDisabled);

        // Call the handleDisabled function to set the state with the initial value.
        handleDisabled();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleDisabled);
    }, []);

    const handleCloseConfiguration = () => setOpenConfiguration(dispatch, false);
    const handleTransparentSideNav = () => setTransparentSideNav(dispatch, true);
    const handleWhiteSideNav = () => setTransparentSideNav(dispatch, false);
    const handleFixedNavbar = () => setFixedNavbar(dispatch, !fixedNavbar);

    // sideNav type buttons styles
    const sideNavTypeButtonsStyles = ({
        functions: { pxToRem },
        boxShadows: { buttonBoxShadow },
    }: {
        functions: { pxToRem: (number: number) => string };
        boxShadows: {
            buttonBoxShadow: {
                main: string;
                stateOf: string;
                stateOfNotHover: string;
            };
        };
    }) => ({
        height: pxToRem(42),
        boxShadow: buttonBoxShadow.main,

        '&:hover, &:focus': {
            opacity: 1,
        },
    });

    return (
        <ConfigurationRoot variant={'permanent'} ownerState={{ openConfiguration }}>
            <SoftBox display={'flex'} justifyContent={'space-between'} alignItems={'baseline'} pt={3} pb={0.8} px={3}>
                <SoftBox>
                    <SoftTypography variant={'h5'}>Soft UI Configurator</SoftTypography>
                    <SoftTypography variant={'body2'} color={'text'}>
                        See our dashboard options.
                    </SoftTypography>
                </SoftBox>

                <Icon
                    sx={({ typography: { size, fontWeightBold }, palette: { dark } }) => ({
                        fontSize: `${size.md} !important`,
                        fontWeight: `${fontWeightBold} !important`,
                        stroke: dark.main,
                        strokeWidth: '2px',
                        cursor: 'pointer',
                        mt: 2,
                    })}
                    onClick={handleCloseConfiguration}
                >
                    close
                </Icon>
            </SoftBox>

            <Divider />

            <SoftBox pt={1.25} pb={3} px={3}>
                <SoftBox>
                    <SoftTypography variant={'h6'}>Sidenav Colors</SoftTypography>

                    <SoftBox mb={0.5}>
                        {sideNavColors.map((color) => (
                            <IconButton
                                key={color}
                                sx={({ borders: { borderWidth }, palette: { white, dark }, transitions }) => ({
                                    width: '24px',
                                    height: '24px',
                                    padding: 0,
                                    border: `${borderWidth[1]} solid ${white.main}`,
                                    borderColor: sideNavColor === color ? dark.main : undefined,
                                    transition: transitions.create('border-color', {
                                        easing: transitions.easing.sharp,
                                        duration: transitions.duration.shorter,
                                    }),
                                    backgroundImage: ({ functions: { linearGradient }, palette: { gradients } }) =>
                                        linearGradient(
                                            gradients[color as keyof typeof gradients].main,
                                            gradients[color as keyof typeof gradients].state,
                                        ),

                                    '&:not(:last-child)': {
                                        mr: 1,
                                    },

                                    '&:hover, &:focus, &:active': {
                                        borderColor: dark.main,
                                    },
                                })}
                                onClick={() => setSideNavColor(dispatch, color)}
                            />
                        ))}
                    </SoftBox>
                </SoftBox>

                <SoftBox mt={3} lineHeight={1}>
                    <SoftTypography variant={'h6'}>Sidenav Type</SoftTypography>
                    <SoftTypography variant={'button'} color={'text'} fontWeight={'regular'}>
                        Choose between 2 different sidenav types.
                    </SoftTypography>

                    <SoftBox
                        sx={{
                            display: 'flex',
                            mt: 2,
                        }}
                    >
                        <SoftButton
                            color={'info'}
                            variant={transparentSideNav ? 'gradient' : 'outlined'}
                            onClick={handleTransparentSideNav}
                            disabled={disabled}
                            fullWidth
                            sx={{
                                mr: 1,
                                ...sideNavTypeButtonsStyles,
                            }}
                        >
                            Transparent
                        </SoftButton>
                        <SoftButton
                            color={'info'}
                            variant={transparentSideNav ? 'outlined' : 'gradient'}
                            onClick={handleWhiteSideNav}
                            disabled={disabled}
                            fullWidth
                            sx={sideNavTypeButtonsStyles}
                        >
                            White
                        </SoftButton>
                    </SoftBox>
                </SoftBox>
                <SoftBox mt={3} mb={2} lineHeight={1}>
                    <SoftTypography variant={'h6'}>Navbar Fixed</SoftTypography>

                    <Switch checked={fixedNavbar} onChange={handleFixedNavbar} />
                </SoftBox>

                <Divider />

                <SoftBox mt={3} mb={2}>
                    <SoftBox mb={2}>
                        <SoftButton
                            component={Link}
                            href={'https://www.creative-tim.com/product/soft-ui-dashboard-react'}
                            target={'_blank'}
                            rel={'noreferrer'}
                            color={'dark'}
                            variant={'outlined' as any}
                            fullWidth
                        >
                            free download
                        </SoftButton>
                    </SoftBox>
                    <SoftButton
                        component={Link}
                        href={'https://www.creative-tim.com/learning-lab/react/quick-start/soft-ui-dashboard/'}
                        target={'_blank'}
                        rel={'noreferrer'}
                        color={'dark'}
                        variant={'outlined' as any}
                        fullWidth
                    >
                        view documentation
                    </SoftButton>
                </SoftBox>
                <SoftBox display={'flex'} justifyContent={'center'}>
                    <a
                        className={'github-button'}
                        href={'https://github.com/creativetimofficial/soft-ui-dashboard-react'}
                        data-icon={'octicon-star'}
                        data-size={'large'}
                        data-show-count={'true'}
                        aria-label={'Star creativetimofficial/soft-ui-dashboard-react on GitHub'}
                    >
                        Star
                    </a>
                </SoftBox>
                <SoftBox mt={3} textAlign={'center'}>
                    <SoftBox mb={0.5}>
                        <SoftTypography variant={'h6'}>Thank you for sharing!</SoftTypography>
                    </SoftBox>

                    <SoftBox display={'flex'} justifyContent={'center'}>
                        <SoftBox mr={1.5}>
                            <SoftButton
                                component={Link}
                                href={
                                    '//twitter.com/intent/tweet?text=Check%20Soft%20UI%20Dashboard%20React%20made%20by%20%40CreativeTim%20%23webdesign%20%23dashboard%20%23react%23mui&url=https%3A%2F%2Fwww.creative-tim.com%2Fproduct%2Fsoft-ui-dashboard-react'
                                }
                                target={'_blank'}
                                rel={'noreferrer'}
                                color={'dark'}
                            >
                                <TwitterIcon />
                                &nbsp; Tweet
                            </SoftButton>
                        </SoftBox>
                        <SoftButton
                            component={Link}
                            href={
                                'https://www.facebook.com/sharer/sharer.php?u=https://www.creative-tim.com/product/soft-ui-dashboard-react'
                            }
                            target={'_blank'}
                            rel={'noreferrer'}
                            color={'dark'}
                        >
                            <FacebookIcon />
                            &nbsp; Share
                        </SoftButton>
                    </SoftBox>
                </SoftBox>
            </SoftBox>
        </ConfigurationRoot>
    );
}

export default Configuration;
