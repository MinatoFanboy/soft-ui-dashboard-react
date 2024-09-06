import { ReactNode } from 'react';

export interface IRoute {
    type: 'collapse' | 'title';
    name?: string;
    key: string;
    route?: string;
    icon?: ReactNode;
    component?: ReactNode;
    noCollapse?: boolean;
    title?: string;
    href?: string;
}
