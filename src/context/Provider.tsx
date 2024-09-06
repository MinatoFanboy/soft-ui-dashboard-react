import { createContext, Dispatch, FC, PropsWithChildren, useMemo, useReducer } from 'react';

interface InitialState {
    direction: 'ltr' | 'rtl';
    fixedNavbar: boolean;
    layout: string;
    miniSideNav: boolean;
    openConfiguration: boolean;
    sideNavColor: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark';
    transparentNav: boolean;
    transparentSideNav: boolean;
}

export type Action =
    | { payload: boolean; type: 'MINI_SIDE_NAV' }
    | { payload: boolean; type: 'TRANSPARENT_SIDE_NAV' }
    | { payload: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark'; type: 'SIDE_NAV_COLOR' }
    | { payload: boolean; type: 'TRANSPARENT_NAV' }
    | { payload: boolean; type: 'FIXED_NAVBAR' }
    | { payload: boolean; type: 'OPEN_CONFIGURATION' }
    | { payload: 'ltr' | 'rtl'; type: 'DIRECTION' }
    | { payload: string; type: 'LAYOUT' };

const reducer = (state: InitialState, action: Action): InitialState => {
    switch (action.type) {
        case 'MINI_SIDE_NAV':
            return { ...state, miniSideNav: action.payload };

        case 'TRANSPARENT_SIDE_NAV':
            return { ...state, transparentSideNav: action.payload };

        case 'SIDE_NAV_COLOR':
            return { ...state, sideNavColor: action.payload };

        case 'TRANSPARENT_NAV':
            return { ...state, transparentNav: action.payload };

        case 'FIXED_NAVBAR':
            return { ...state, fixedNavbar: action.payload };

        case 'OPEN_CONFIGURATION':
            return { ...state, openConfiguration: action.payload };

        case 'DIRECTION':
            return { ...state, direction: action.payload };

        case 'LAYOUT':
            return { ...state, layout: action.payload };

        default:
            return state;
    }
};

export const GlobalContext = createContext<{ dispatch: Dispatch<Action>; state: InitialState } | undefined>(undefined);

GlobalContext.displayName = 'SoftUIContext';

export const GlobalProvider: FC<PropsWithChildren> = ({ children }) => {
    const initialState: InitialState = {
        direction: 'ltr',
        fixedNavbar: true,
        layout: 'dashboard',
        miniSideNav: false,
        openConfiguration: false,
        sideNavColor: 'info',
        transparentNav: true,
        transparentSideNav: true,
    };
    const [state, dispatch] = useReducer(reducer, initialState);

    const value = useMemo(() => ({ dispatch, state }), [dispatch, state]);

    return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};
