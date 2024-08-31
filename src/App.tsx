import { FC, useEffect, useMemo } from 'react';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import rtlPlugin from 'stylis-plugin-rtl';
import { ThemeProvider } from '@mui/material/styles';

import { useController } from './hooks';

const App: FC = () => {
    const { dispatch, state } = useController();
    const { direction, layout, miniSideNav, openConfiguration, sideNavColor } = state;

    useEffect(() => {
        document.body.setAttribute('dir', direction);
    }, [direction]);

    const rtlCache = useMemo(() => {
        const cacheRtl = createCache({ key: 'rtl', stylisPlugins: [rtlPlugin] });

        return cacheRtl;
    }, []);

    const _renderMainLayout = useMemo(() => {
        return <ThemeProvider theme={themeRTL}></ThemeProvider>;
    }, []);

    return direction === 'rtl' ? (
        <CacheProvider value={rtlCache}>{_renderMainLayout}</CacheProvider>
    ) : (
        <>{_renderMainLayout}</>
    );
};

export default App;
