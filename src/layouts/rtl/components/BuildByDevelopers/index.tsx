// @mui material components
import { Card, Grid2 as Grid, Icon } from '@mui/material';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';
import SoftTypography from '~/components/SoftTypography';

// Images
import wavesWhite from '~/assets/images/shapes/waves-white.svg';
import rocketWhite from '~/assets/images/illustrations/rocket-white.png';

function BuildByDevelopers() {
    return (
        <Card>
            <SoftBox p={2}>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, lg: 6 }}>
                        <SoftBox display={'flex'} flexDirection={'column'} height={'100%'}>
                            <SoftBox pt={1} mb={0.5}>
                                <SoftTypography variant={'body2'} color={'text'} fontWeight={'bold'}>
                                    Build by developers
                                </SoftTypography>
                            </SoftBox>
                            <SoftTypography variant={'h5'} fontWeight={'bold'} gutterBottom>
                                Soft UI Dashboard
                            </SoftTypography>
                            <SoftBox mb={6}>
                                <SoftTypography variant={'body2'} color={'text'} fontWeight={'bold'}>
                                    From colors, cards, typography to complex elements, you will find the full
                                    documentation.
                                </SoftTypography>
                            </SoftBox>
                            <SoftTypography
                                component={'a'}
                                href={'#'}
                                variant={'button'}
                                color={'text'}
                                fontWeight={'bold'}
                                sx={{
                                    mt: 'auto',
                                    mr: 'auto',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    cursor: 'pointer',

                                    '& .material-icons-round': {
                                        fontSize: '1.125rem',
                                        transform: `translate(2px, -0.5px)`,
                                        transition: 'transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)',
                                    },

                                    '&:hover .material-icons-round, &:focus  .material-icons-round': {
                                        transform: `translate(6px, -0.5px)`,
                                    },
                                }}
                            >
                                Read More
                                <Icon sx={{ fontWeight: 'bold' }}>arrow_backward</Icon>
                            </SoftTypography>
                        </SoftBox>
                    </Grid>
                    <Grid size={{ xs: 12, lg: 5 }} sx={{ position: 'relative', ml: 'auto' }}>
                        <SoftBox
                            height={'100%'}
                            display={'grid'}
                            justifyContent={'center'}
                            alignItems={'center'}
                            bgColor={'info'}
                            borderRadius={'lg'}
                            variant={'gradient'}
                        >
                            <SoftBox
                                component={'img'}
                                src={wavesWhite}
                                alt={'waves'}
                                display={'block'}
                                position={'absolute'}
                                left={0}
                                width={'100%'}
                                height={'100%'}
                            />
                            <SoftBox component={'img'} src={rocketWhite} alt={'rocket'} width={'100%'} pt={3} />
                        </SoftBox>
                    </Grid>
                </Grid>
            </SoftBox>
        </Card>
    );
}

export default BuildByDevelopers;
