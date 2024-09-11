// @mui material components
import Drawer from '@mui/material/Drawer';
import { styled } from '@mui/material/styles';

export default styled(Drawer)<{ ownerState: { openConfiguration: boolean } }>(({ theme, ownerState }) => {
    const { boxShadows, functions, transitions } = theme;
    const { openConfiguration } = ownerState;

    const configuratorWidth = 360;
    const { lg } = boxShadows;
    const { pxToRem } = functions;

    // drawer styles when openConfiguration={true}
    const drawerOpenStyles = () => ({
        width: configuratorWidth,
        left: 'initial',
        right: 0,
        transition: transitions.create('right', {
            easing: transitions.easing.sharp,
            duration: transitions.duration.short,
        }),
    });

    // drawer styles when openConfiguration={false}
    const drawerCloseStyles = () => ({
        left: 'initial',
        right: pxToRem(-350),
        transition: transitions.create('all', {
            easing: transitions.easing.sharp,
            duration: transitions.duration.short,
        }),
    });

    return {
        '& .MuiDrawer-paper': {
            height: '100vh',
            margin: 0,
            padding: `0 ${pxToRem(10)}`,
            borderRadius: 0,
            boxShadow: lg,
            overflowY: 'auto',
            ...(openConfiguration ? drawerOpenStyles() : drawerCloseStyles()),
        },
    };
});
