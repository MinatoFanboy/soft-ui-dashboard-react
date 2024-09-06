import { FC, useEffect, useMemo } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';

// @mui material components
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Soft UI Dashboard React themes
import theme from './assets/theme';
import themeRTL from './assets/theme/theme-rtl';

// Soft UI Dashboard React examples
import SideNav from './examples/SideNav';

// Hook context
import { useController } from './hooks';

// Routes
import routes from './routes';

// Type define
import { IRoute } from './types';

// Images

const App: FC = () => {
    const { pathname } = useLocation();
    const { state } = useController();
    const { direction, layout } = state;

    // Cache for the rtl
    const rtlCache = useMemo(() => {
        const cacheRtl = createCache({
            key: 'rtl',
            stylisPlugins: [rtlPlugin],
        });

        return cacheRtl;
    }, []);

    const getRoutes = (allRoutes: IRoute[]) =>
        allRoutes.map((route) => {
            if (route.route) {
                return <Route path={route.route} element={route.component} key={route.key} />;
            }

            return null;
        });

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
                        <SideNav />
                    </>
                )}
                <Routes>
                    {getRoutes(routes)}
                    <Route path={'*'} element={<Navigate to={'/dashboard'} />} />
                </Routes>
            </>
        );
    }, [layout]);

    return direction === 'rtl' ? (
        <CacheProvider value={rtlCache}>
            <ThemeProvider theme={themeRTL}>{_renderMainLayout}</ThemeProvider>
        </CacheProvider>
    ) : (
        <ThemeProvider theme={theme}>{_renderMainLayout}</ThemeProvider>
    );
};

export default App;
