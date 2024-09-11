import { ReactNode } from 'react';

// @mui material components
import { Card, Grid2 as Grid, Icon } from '@mui/material';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';
import SoftTypography from '~/components/SoftTypography';

interface MiniStatisticsCardProps {
    bgColor?: 'white' | 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark';
    title?: {
        fontWeight?: 'light' | 'regular' | 'medium' | 'bold';
        text?: string;
    };
    count: string | number;
    percentage?: {
        color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'white';
        text?: string | number;
    };
    icon: {
        color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark';
        component: ReactNode;
    };
    direction?: 'right' | 'left';
}

function MiniStatisticsCard({
    bgColor = 'white',
    title = { fontWeight: 'medium', text: '' },
    count,
    percentage = { color: 'success', text: '' },
    icon,
    direction = 'right',
}: MiniStatisticsCardProps) {
    return (
        <Card>
            <SoftBox bgColor={bgColor} variant={'gradient'}>
                <SoftBox p={2}>
                    <Grid container alignItems={'center'}>
                        {direction === 'left' ? (
                            <Grid>
                                <SoftBox
                                    variant={'gradient'}
                                    bgColor={bgColor === 'white' ? icon.color : 'white'}
                                    color={bgColor === 'white' ? 'white' : 'dark'}
                                    width={'3rem'}
                                    height={'3rem'}
                                    borderRadius={'md'}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    shadow={'md'}
                                >
                                    <Icon fontSize={'small'} color={'inherit'}>
                                        {icon.component}
                                    </Icon>
                                </SoftBox>
                            </Grid>
                        ) : null}
                        <Grid size={{ xs: 8 }}>
                            <SoftBox ml={direction === 'left' ? 2 : 0} lineHeight={1}>
                                <SoftTypography
                                    variant={'button'}
                                    color={bgColor === 'white' ? 'text' : 'white'}
                                    opacity={bgColor === 'white' ? 1 : 0.7}
                                    textTransform={'capitalize'}
                                    fontWeight={title.fontWeight}
                                >
                                    {title.text}
                                </SoftTypography>
                                <SoftTypography
                                    variant={'h5'}
                                    fontWeight={'bold'}
                                    color={bgColor === 'white' ? 'dark' : 'white'}
                                >
                                    {count}{' '}
                                    <SoftTypography variant={'button'} color={percentage.color} fontWeight={'bold'}>
                                        {percentage.text}
                                    </SoftTypography>
                                </SoftTypography>
                            </SoftBox>
                        </Grid>
                        {direction === 'right' ? (
                            <Grid size={{ xs: 4 }}>
                                <SoftBox
                                    variant={'gradient'}
                                    bgColor={bgColor === 'white' ? icon.color : 'white'}
                                    color={bgColor === 'white' ? 'white' : 'dark'}
                                    width={'3rem'}
                                    height={'3rem'}
                                    marginLeft={'auto'}
                                    borderRadius={'md'}
                                    display={'flex'}
                                    justifyContent={'center'}
                                    alignItems={'center'}
                                    shadow={'md'}
                                >
                                    <Icon fontSize={'small'} color={'inherit'}>
                                        {icon.component}
                                    </Icon>
                                </SoftBox>
                            </Grid>
                        ) : null}
                    </Grid>
                </SoftBox>
            </SoftBox>
        </Card>
    );
}

export default MiniStatisticsCard;
