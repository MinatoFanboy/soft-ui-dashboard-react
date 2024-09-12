// @mui material components
import Menu from '@mui/material/Menu';
// import Grid from "@mui/material/Grid";

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';

// Soft UI Dashboard React examples
import DefaultNavbarLink from './DefaultNavbarLink';

// Typechecking props for the DefaultNavbarMenu
interface DefaultNavbarMobileProps {
    open: boolean | HTMLElement;
    close: (() => void) | boolean | Record<string, any>;
    light: boolean;
}

function DefaultNavbarMobile({ open, close, light }: DefaultNavbarMobileProps) {
    const { width } = typeof open !== 'boolean' ? open.getBoundingClientRect() : { width: undefined };

    return (
        <Menu
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
            }}
            transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
            }}
            anchorEl={open as any}
            open={Boolean(open)}
            onClose={close as any}
            MenuListProps={{ style: { width: width ? `calc(${width}px - 4rem)` : undefined } }}
        >
            <SoftBox px={0.5}>
                <DefaultNavbarLink icon={'donut_large'} light={light} name={'dashboard'} route={'/dashboard'} />
                <DefaultNavbarLink icon={'person'} light={light} name={'profile'} route={'/profile'} />
                <DefaultNavbarLink
                    icon={'account_circle'}
                    light={light}
                    name={'sign up'}
                    route={'/authentication/sign-up'}
                />
                <DefaultNavbarLink icon={'key'} light={light} name={'sign in'} route={'/authentication/sign-in'} />
            </SoftBox>
        </Menu>
    );
}

export default DefaultNavbarMobile;
