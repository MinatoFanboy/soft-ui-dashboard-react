import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';

// @mui material components
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Icon } from '@mui/material';

// Soft UI Dashboard React themes
import theme from './assets/theme';
import themeRTL from './assets/theme/theme-rtl';

// Soft UI Dashboard React examples
import SideNav from './examples/SideNav';
import Configuration from './examples/Configuration';

// Soft UI Dashboard React components
import SoftBox from './components/SoftBox';

// Hook context
import { useController } from './hooks';
import { setMiniSideNav, setOpenConfiguration } from './context';

// Routes
import routes from './routes';

// Type define
import { IRoute } from './types';

// Images
import brand from '~/assets/images/logo-ct.png';

const App: FC = () => {
    const { pathname } = useLocation();
    const { dispatch, state } = useController();
    const { direction, layout, miniSideNav, openConfiguration, sideNavColor } = state;

    const [onMouseEnter, setOnMouseEnter] = useState<boolean>(false);

    // Cache for the rtl
    const rtlCache = useMemo(() => {
        const cacheRtl = createCache({
            key: 'rtl',
            stylisPlugins: [rtlPlugin],
        });

        return cacheRtl;
    }, []);

    // Open sideNav when mouse enter on mini sideNav
    const handleOnMouseEnter = useCallback(() => {
        if (miniSideNav && !onMouseEnter) {
            setMiniSideNav(dispatch, false);
            setOnMouseEnter(true);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [miniSideNav, onMouseEnter]);

    // Close sideNav when mouse leave mini sideNav
    const handleOnMouseLeave = useCallback(() => {
        if (onMouseEnter) {
            setMiniSideNav(dispatch, true);
            setOnMouseEnter(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [onMouseEnter]);

    // Change the openConfiguration state
    const handleConfigurationOpen = useCallback(
        () => setOpenConfiguration(dispatch, !openConfiguration),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [openConfiguration],
    );

    const getRoutes = (allRoutes: IRoute[]) =>
        allRoutes.map((route) => {
            if (route.route) {
                return <Route path={route.route} element={route.component} key={route.key} />;
            }

            return null;
        });

    const configsButton = useMemo(() => {
        return (
            <SoftBox
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                width={'3.5rem'}
                height={'3.5rem'}
                bgColor={'white'}
                shadow={'sm'}
                borderRadius={'50%'}
                position={'fixed'}
                right={'2rem'}
                bottom={'2rem'}
                zIndex={99}
                color={'dark'}
                sx={{ cursor: 'pointer' }}
                onClick={handleConfigurationOpen}
            >
                <Icon fontSize={'inherit'} color={'inherit'}>
                    settings
                </Icon>
            </SoftBox>
        );
    }, [handleConfigurationOpen]);

    // Setting the dir attribute for the body element
    useEffect(() => {
        document.body.setAttribute('dir', direction);
    }, [direction]);

    // Setting page scroll to 0 when changing the route
    useEffect(() => {
        document.documentElement.scrollTop = 0;

        if (document.scrollingElement) {
            document.scrollingElement.scrollTop = 0;
        }
    }, [pathname]);

    const _renderMainLayout = useMemo(() => {
        return (
            <>
                <CssBaseline />
                {layout === 'dashboard' && (
                    <>
                        <SideNav
                            color={sideNavColor}
                            brand={brand}
                            brandName={'Soft UI Dashboard'}
                            routes={routes}
                            onMouseEnter={handleOnMouseEnter}
                            onMouseLeave={handleOnMouseLeave}
                        />
                        <Configuration />
                        {configsButton}
                    </>
                )}
                <Routes>
                    {getRoutes(routes)}
                    <Route path={'*'} element={<Navigate to={'/dashboard'} />} />
                </Routes>
            </>
        );
    }, [configsButton, layout, sideNavColor, handleOnMouseEnter, handleOnMouseLeave]);

    return direction === 'rtl' ? (
        <CacheProvider value={rtlCache}>
            <ThemeProvider theme={themeRTL}>{_renderMainLayout}</ThemeProvider>
        </CacheProvider>
    ) : (
        <ThemeProvider theme={theme}>{_renderMainLayout}</ThemeProvider>
    );
};

export default App;
