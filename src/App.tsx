import { FC, useEffect, useMemo } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

import themeRtl from './assets/theme/theme-rtl';
import { useController } from './hooks';
import routes from './routes';

const App: FC = () => {
    const { pathname } = useLocation();
    const { state } = useController();
    const { direction } = state;

    const rtlCache = useMemo(() => {
        const cacheRtl = createCache({ key: 'rtl', stylisPlugins: [rtlPlugin] });

        return cacheRtl;
    }, []);

    useEffect(() => {
        document.body.setAttribute('dir', direction);
    }, [direction]);

    useEffect(() => {
        document.documentElement.scrollTop = 0;
        if (document.scrollingElement) {
            document.scrollingElement.scrollTop = 0;
        }
    }, [pathname]);

    const _renderMainLayout = useMemo(() => {
        return (
            <ThemeProvider theme={themeRtl}>
                <CssBaseline />
                <Routes>
                    {routes.map((route) => {
                        if (route.route) {
                            return <Route path={route.route} element={route.component} key={route.key} />;
                        }

                        return null;
                    })}
                    <Route path={'*'} element={<Navigate to={'/dashboard'} />} />
                </Routes>
            </ThemeProvider>
        );
    }, []);

    return direction === 'rtl' ? (
        <CacheProvider value={rtlCache}>{_renderMainLayout}</CacheProvider>
    ) : (
        <>{_renderMainLayout}</>
    );
};

export default App;
