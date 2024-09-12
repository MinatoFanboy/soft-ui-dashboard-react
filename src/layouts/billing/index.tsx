import { FC } from 'react';

// @mui material components
import { Grid2 as Grid } from '@mui/material';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';

// Soft UI Dashboard React components
import MasterCard from '~/examples/Cards/MasterCard';
import DefaultInfoCard from '~/examples/Cards/InfoCards/DefaultInfoCard';

// Soft UI Dashboard React examples
import DashboardLayout from '~/examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from '~/examples/NavBars/DashboardNavbar';
import Footer from '~/examples/Footer';

// Billing page components
import PaymentMethod from './components/PaymentMethod';
import Invoices from './components/Invoices';
import BillingInformation from './components/BillingInformation';
import Transactions from './components/Transactions';

const Billing: FC = () => {
    return (
        <DashboardLayout>
            <DashboardNavbar />
            <SoftBox mt={4}>
                <SoftBox mb={1.5}>
                    <Grid container spacing={3}>
                        <Grid container size={{ xs: 12, lg: 8 }}>
                            <Grid size={{ xs: 12, xl: 6 }}>
                                <MasterCard number={4562112245947852} holder={'jack peterson'} expires={'11/22'} />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6, xl: 3 }}>
                                <DefaultInfoCard
                                    icon={'account_balance'}
                                    title={'salary'}
                                    description={'Belong Interactive'}
                                    value={'+$2000'}
                                />
                            </Grid>
                            <Grid size={{ xs: 12, md: 6, xl: 3 }}>
                                <DefaultInfoCard
                                    icon={'paypal'}
                                    title={'paypal'}
                                    description={'Freelance Payment'}
                                    value={'$455.00'}
                                />
                            </Grid>
                            <Grid size={{ xs: 12 }}>
                                <PaymentMethod />
                            </Grid>
                        </Grid>
                        <Grid size={{ xs: 12, lg: 4 }}>
                            <Invoices />
                        </Grid>
                    </Grid>
                </SoftBox>
                <SoftBox my={3}>
                    <Grid container spacing={3}>
                        <Grid size={{ xs: 12, md: 7 }}>
                            <BillingInformation />
                        </Grid>
                        <Grid size={{ xs: 12, md: 5 }}>
                            <Transactions />
                        </Grid>
                    </Grid>
                </SoftBox>
            </SoftBox>
            <Footer />
        </DashboardLayout>
    );
};

export default Billing;
