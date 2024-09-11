import { FC } from 'react';

// @mui material components
import { Grid2 as Grid } from '@mui/material';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';

// Soft UI Dashboard React examples
import DashboardLayout from '~/examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from '~/examples/NavBars/DashboardNavbar';
import MiniStatisticsCard from '~/examples/Cards/StatisticsCards/MiniStatisticsCard';

const Dashboard: FC = () => {
    return (
        <DashboardLayout>
            <DashboardNavbar />

            <SoftBox py={3}>
                <SoftBox mb={3}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
                            <MiniStatisticsCard
                                title={{ text: "today's money" }}
                                count={'$53,000'}
                                percentage={{ color: 'success', text: '+55%' }}
                                icon={{ color: 'info', component: 'paid' }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
                            <MiniStatisticsCard
                                title={{ text: "today's users" }}
                                count={'2,300'}
                                percentage={{ color: 'success', text: '+3%' }}
                                icon={{ color: 'info', component: 'public' }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
                            <MiniStatisticsCard
                                title={{ text: 'new clients' }}
                                count={'+3,462'}
                                percentage={{ color: 'error', text: '-2%' }}
                                icon={{ color: 'info', component: 'emoji_events' }}
                            />
                        </Grid>
                        <Grid size={{ xs: 12, sm: 6, xl: 3 }}>
                            <MiniStatisticsCard
                                title={{ text: 'sales' }}
                                count={'$103,430'}
                                percentage={{ color: 'success', text: '+5%' }}
                                icon={{
                                    color: 'info',
                                    component: 'shopping_cart',
                                }}
                            />
                        </Grid>
                    </Grid>
                </SoftBox>
            </SoftBox>
        </DashboardLayout>
    );
};

export default Dashboard;
