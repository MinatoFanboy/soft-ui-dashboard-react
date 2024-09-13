import { FC, ReactNode } from 'react';

// @mui material components
import { Grid2 as Grid, Theme } from '@mui/material';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';
import SoftTypography from '~/components/SoftTypography';

// Soft UI Dashboard React examples
import DefaultNavbar from '~/examples/NavBars/DefaultNavbar';
import PageLayout from '~/examples/LayoutContainers/PageLayout';

// Authentication layout components
import Footer from '../Footer';

interface BasicContainerProps {
    title?: string;
    description?: string;
    image: string;
    children: ReactNode;
}

const BasicContainer: FC<BasicContainerProps> = ({ title = '', description = '', image, children }) => {
    return (
        <PageLayout>
            <DefaultNavbar
                action={{
                    type: 'external',
                    route: 'https://creative-tim.com/product/soft-ui-dashboard-react',
                    label: 'free download',
                }}
                transparent
                light
            />
            <SoftBox
                width={'calc(100% - 2rem)'}
                minHeight={'50vh'}
                borderRadius={'lg'}
                mx={2}
                my={2}
                pt={6}
                pb={28}
                sx={{
                    backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }: Theme) =>
                        image &&
                        `${linearGradient(
                            rgba(gradients.dark.main, 0.6),
                            rgba(gradients.dark.state, 0.6),
                        )}, url(${image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                }}
            >
                <Grid container spacing={3} justifyContent={'center'} sx={{ textAlign: 'center' }}>
                    <Grid size={{ xs: 10, lg: 4 }}>
                        <SoftBox mt={6} mb={1}>
                            <SoftTypography variant={'h1'} color={'white'} fontWeight={'bold'}>
                                {title}
                            </SoftTypography>
                        </SoftBox>
                        <SoftBox mb={2}>
                            <SoftTypography variant={'body2'} color={'white'} fontWeight={'regular'}>
                                {description}
                            </SoftTypography>
                        </SoftBox>
                    </Grid>
                </Grid>
            </SoftBox>
            <SoftBox mt={{ xs: -26, lg: -24 }} px={1} width={'calc(100% - 2rem)'} mx={'auto'}>
                <Grid container spacing={1} justifyContent={'center'}>
                    <Grid size={{ xs: 11, sm: 9, md: 5, lg: 4, xl: 3 }} pt={1}>
                        {children}
                    </Grid>
                </Grid>
            </SoftBox>
            <Footer />
        </PageLayout>
    );
};

export default BasicContainer;
