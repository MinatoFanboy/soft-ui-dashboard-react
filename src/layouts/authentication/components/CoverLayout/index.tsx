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

interface CoverLayoutProps {
    color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light';
    header?: ReactNode;
    title?: string;
    description?: string;
    image: string;
    top?: number;
    children: ReactNode;
}

const CoverContainer: FC<CoverLayoutProps> = ({
    color = 'info',
    header = '',
    title = '',
    description = '',
    image,
    top = 20,
    children,
}) => {
    return (
        <PageLayout background="white">
            <DefaultNavbar
                action={{
                    type: 'external',
                    route: 'https://creative-tim.com/product/soft-ui-dashboard-react',
                    label: 'free download',
                    color: 'dark',
                }}
            />
            <Grid
                container
                justifyContent="center"
                sx={{
                    minHeight: '75vh',
                    margin: 0,
                }}
            >
                <Grid size={{ sm: 8, md: 5, xl: 3 }}>
                    <SoftBox mt={top}>
                        <SoftBox pt={3} px={3}>
                            {!header ? (
                                <>
                                    <SoftBox mb={1}>
                                        <SoftTypography variant={'h3'} fontWeight={'bold'} color={color} textGradient>
                                            {title}
                                        </SoftTypography>
                                    </SoftBox>
                                    <SoftTypography variant={'body2'} fontWeight={'regular'} color={'text'}>
                                        {description}
                                    </SoftTypography>
                                </>
                            ) : (
                                header
                            )}
                        </SoftBox>
                        <SoftBox p={3}>{children}</SoftBox>
                    </SoftBox>
                </Grid>
                <Grid size={{ xs: 12, md: 5 }}>
                    <SoftBox
                        height={'100%'}
                        display={{ xs: 'none', md: 'block' }}
                        position={'relative'}
                        right={{ md: '-12rem', xl: '-16rem' }}
                        mr={-16}
                        sx={{
                            transform: 'skewX(-10deg)',
                            overflow: 'hidden',
                            borderBottomLeftRadius: ({ borders: { borderRadius } }: Theme) => borderRadius.lg,
                        }}
                    >
                        <SoftBox
                            ml={-8}
                            height={'100%'}
                            sx={{
                                backgroundImage: `url(${image})`,
                                backgroundSize: 'cover',
                                transform: 'skewX(10deg)',
                            }}
                        />
                    </SoftBox>
                </Grid>
            </Grid>
            <Footer />
        </PageLayout>
    );
};

export default CoverContainer;
