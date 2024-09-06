// @mui material components
import { Drawer, styled } from '@mui/material';

const SideNavRoot = styled(Drawer)<{ ownerState: { transparentSideNav: boolean; miniSideNav: boolean } }>(
    ({ theme, ownerState }) => {
        const { palette, boxShadows, transitions, breakpoints, functions } = theme;
        const { transparentSideNav, miniSideNav } = ownerState;

        const sidebarWidth = 250;
        const { white, transparent } = palette;
        const { xxl } = boxShadows;
        const { pxToRem } = functions;

        // styles for the sideNav when miniSideNav={false}
        const drawerOpenStyles = () => ({
            transform: 'translateX(0)',
            transition: transitions.create('transform', {
                easing: transitions.easing.sharp,
                duration: transitions.duration.shorter,
            }),

            [breakpoints.up('xl')]: {
                backgroundColor: transparentSideNav ? transparent.main : white.main,
                boxShadow: transparentSideNav ? 'none' : xxl,
                marginBottom: transparentSideNav ? 0 : 'inherit',
                left: '0',
                width: sidebarWidth,
                transform: 'translateX(0)',
                transition: transitions.create(['width', 'background-color'], {
                    easing: transitions.easing.sharp,
                    duration: transitions.duration.enteringScreen,
                }),
            },
        });

        // styles for the sideNav when miniSideNav={true}
        const drawerCloseStyles = () => ({
            transform: `translateX(${pxToRem(-320)})`,
            transition: transitions.create('transform', {
                easing: transitions.easing.sharp,
                duration: transitions.duration.shorter,
            }),

            [breakpoints.up('xl')]: {
                backgroundColor: transparentSideNav ? transparent.main : white.main,
                boxShadow: transparentSideNav ? 'none' : xxl,
                marginBottom: transparentSideNav ? 0 : 'inherit',
                left: '0',
                width: pxToRem(96),
                overflowX: 'hidden',
                transform: 'translateX(0)',
                transition: transitions.create(['width', 'background-color'], {
                    easing: transitions.easing.sharp,
                    duration: transitions.duration.shorter,
                }),
            },
        });

        return {
            '& .MuiDrawer-paper': {
                boxShadow: xxl,
                border: 'none',

                ...(miniSideNav ? drawerCloseStyles() : drawerOpenStyles()),
            },
        };
    },
);

export default SideNavRoot;
