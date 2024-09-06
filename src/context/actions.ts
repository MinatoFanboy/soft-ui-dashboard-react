import { Dispatch } from 'react';

import { Action } from './Provider';

export const setMiniSideNav = (dispatch: Dispatch<Action>, value: boolean) =>
    dispatch({ payload: value, type: 'MINI_SIDE_NAV' });

export const setTransparentSideNav = (dispatch: Dispatch<Action>, value: boolean) =>
    dispatch({ payload: value, type: 'TRANSPARENT_SIDE_NAV' });

export const setSideNavColor = (
    dispatch: Dispatch<Action>,
    value: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark',
) => dispatch({ payload: value, type: 'SIDE_NAV_COLOR' });

export const setTransparentNavbar = (dispatch: Dispatch<Action>, value: boolean) =>
    dispatch({ payload: value, type: 'TRANSPARENT_NAV' });

export const setFixedNavbar = (dispatch: Dispatch<Action>, value: boolean) =>
    dispatch({ payload: value, type: 'FIXED_NAVBAR' });

export const setOpenConfigurator = (dispatch: Dispatch<Action>, value: boolean) =>
    dispatch({ payload: value, type: 'OPEN_CONFIGURATION' });

export const setDirection = (dispatch: Dispatch<Action>, value: 'ltr' | 'rtl') =>
    dispatch({ payload: value, type: 'DIRECTION' });

export const setLayout = (dispatch: Dispatch<Action>, value: string) => dispatch({ payload: value, type: 'LAYOUT' });
