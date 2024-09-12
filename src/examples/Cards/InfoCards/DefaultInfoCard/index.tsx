// @mui material components
import { Card, Divider, Icon } from '@mui/material';
import { ReactNode } from 'react';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';
import SoftTypography from '~/components/SoftTypography';

// Typechecking props for the DefaultInfoCard
interface DefaultInfoCardProps {
    color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark';
    icon: ReactNode;
    title: string;
    description?: string;
    value?: string | number;
}

function DefaultInfoCard({ color = 'info', icon, title, description = '', value = '' }: DefaultInfoCardProps) {
    return (
        <Card>
            <SoftBox p={2} mx={3} display={'flex'} justifyContent={'center'}>
                <SoftBox
                    display={'grid'}
                    justifyContent={'center'}
                    alignItems={'center'}
                    bgColor={color}
                    color={'white'}
                    width={'4rem'}
                    height={'4rem'}
                    shadow={'md'}
                    borderRadius={'lg'}
                    variant={'gradient'}
                >
                    <Icon fontSize={'medium'}>{icon}</Icon>
                </SoftBox>
            </SoftBox>
            <SoftBox pb={2} px={2} textAlign={'center'} lineHeight={1.25}>
                <SoftTypography variant={'h6'} fontWeight={'medium'} textTransform={'capitalize'}>
                    {title}
                </SoftTypography>
                {description && (
                    <SoftTypography variant={'caption'} color={'text'} fontWeight={'regular'}>
                        {description}
                    </SoftTypography>
                )}
                {description && !value ? null : <Divider />}
                {value && (
                    <SoftTypography variant={'h5'} fontWeight={'medium'}>
                        {value}
                    </SoftTypography>
                )}
            </SoftBox>
        </Card>
    );
}

export default DefaultInfoCard;
