import { FC, ReactNode } from 'react';

// @mui material components
import { Icon, MenuItem, MenuItemProps, Theme } from '@mui/material';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';
import SoftTypography from '~/components/SoftTypography';

// custom styles for the NotificationItem
import { menuItem, menuImage } from './styles';

type NotificationItemProps = {
    color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark';
    image: ReactNode;
    title: string[];
    date: string;
} & MenuItemProps;

const NotificationItem: FC<NotificationItemProps> = ({ color = 'dark', image, title, date, ...rest }) => (
    <MenuItem {...rest} sx={(theme) => menuItem(theme)}>
        <SoftBox
            width={'2.25rem'}
            height={'2.25rem'}
            mt={0.25}
            mr={2}
            mb={0.25}
            borderRadius={'lg'}
            sx={(theme: Theme) => menuImage(theme, { color })}
        >
            {image}
        </SoftBox>
        <SoftBox>
            <SoftTypography variant={'button'} textTransform={'capitalize'} fontWeight={'regular'}>
                <strong>{title[0]}</strong> {title[1]}
            </SoftTypography>
            <SoftTypography
                variant={'caption'}
                color={'secondary'}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mt: 0.5,
                }}
            >
                <SoftTypography variant={'button'} color={'secondary'}>
                    <Icon
                        sx={{
                            lineHeight: 1.2,
                            mr: 0.5,
                        }}
                    >
                        watch_later
                    </Icon>
                </SoftTypography>
                {date}
            </SoftTypography>
        </SoftBox>
    </MenuItem>
);

export default NotificationItem;
