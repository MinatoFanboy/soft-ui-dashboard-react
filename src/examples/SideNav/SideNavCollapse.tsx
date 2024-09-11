import { FC, ReactNode } from 'react';

// @mui material components
import { Collapse, Icon, ListItem, ListItemIcon, ListItemText } from '@mui/material';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';

// Custom styles for the SideNavCollapse
import { collapseItem, collapseIconBox, collapseIcon, collapseText } from './styles/sideNavCollapse';

// Soft UI Dashboard React context
import { useController } from '~/hooks';

interface SideNavCollapseProps {
    color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark';
    icon: ReactNode;
    name: ReactNode;
    children?: ReactNode;
    active?: boolean;
    nocollapse?: string;
    open?: boolean;
}

const SideNavCollapse: FC<SideNavCollapseProps> = ({
    color = 'info',
    icon,
    name,
    children,
    active = false,
    open = false,
    ...rest
}) => {
    const { state } = useController();
    const { miniSideNav, transparentSideNav } = state;

    return (
        <>
            <ListItem component="li">
                <SoftBox {...rest} sx={(theme) => collapseItem(theme, { active, transparentSideNav })}>
                    <ListItemIcon sx={(theme) => collapseIconBox(theme, { active, transparentSideNav, color })}>
                        {typeof icon === 'string' ? (
                            <Icon sx={(theme) => collapseIcon(theme, { active })}>{icon}</Icon>
                        ) : (
                            icon
                        )}
                    </ListItemIcon>

                    <ListItemText
                        primary={name}
                        sx={(theme) => collapseText(theme, { miniSideNav, transparentSideNav, active })}
                    />
                </SoftBox>
            </ListItem>
            {children && (
                <Collapse in={open} unmountOnExit>
                    {children}
                </Collapse>
            )}
        </>
    );
};

export default SideNavCollapse;
