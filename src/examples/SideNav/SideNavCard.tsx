// @mui material components
import { Card, CardContent, Icon, Link } from '@mui/material';

// Soft UI Dashboard React components
import SoftButton from '~/components/SoftButton';
import SoftBox from '~/components/SoftBox';
import SoftTypography from '~/components/SoftTypography';

// Custom styles for the SideNavCard
import { card, cardContent, cardIconBox, cardIcon } from './styles/sideNavCard';

// Soft UI Dashboard React context
import { useController } from '~/hooks';

function SideNavCard() {
    const { state } = useController();
    const { miniSideNav, sideNavColor } = state;

    return (
        <Card sx={(theme) => card(theme, { miniSideNav })}>
            <CardContent sx={(theme) => cardContent(theme, { sideNavColor })}>
                <SoftBox
                    bgColor={'white'}
                    width={'2rem'}
                    height={'2rem'}
                    borderRadius={'md'}
                    shadow={'md'}
                    mb={2}
                    sx={cardIconBox}
                >
                    <Icon fontSize={'medium'} sx={(theme) => cardIcon(theme, { sideNavColor })}>
                        star
                    </Icon>
                </SoftBox>
                <SoftBox lineHeight={1}>
                    <SoftTypography variant={'h6'} color={'white'}>
                        Need help?
                    </SoftTypography>
                    <SoftBox mb={1.825} mt={-1}>
                        <SoftTypography variant={'caption'} color={'white'} fontWeight={'medium'}>
                            Please check our docs
                        </SoftTypography>
                    </SoftBox>
                    <SoftButton
                        component={Link}
                        href={'https://www.creative-tim.com/learning-lab/react/quick-start/soft-ui-dashboard/'}
                        target={'_blank'}
                        rel={'noreferrer'}
                        size={'small'}
                        color={'white'}
                        fullWidth
                    >
                        documentation
                    </SoftButton>
                </SoftBox>
            </CardContent>
        </Card>
    );
}

export default SideNavCard;
