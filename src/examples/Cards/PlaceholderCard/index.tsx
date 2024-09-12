import { ReactNode } from 'react';

// @mui material components
import { Card, Icon, Theme } from '@mui/material';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';
import SoftTypography from '~/components/SoftTypography';

// Typechecking props for the PlaceholderCard
interface PlaceholderCardProps {
    icon?: ReactNode;
    title: {
        variant: string;
        text: string;
    };
    hasBorder?: boolean;
    outlined?: boolean;
}

function PlaceholderCard({ icon = 'add', title, hasBorder = false, outlined = false }: PlaceholderCardProps) {
    return (
        <Card
            raised
            sx={({ borders: { borderWidth, borderColor } }: Theme) => ({
                height: '100%',
                backgroundColor: outlined ? 'transparent' : undefined,
                boxShadow: outlined ? 'none' : undefined,
                border: hasBorder || outlined ? `${borderWidth[1]} solid ${borderColor}` : 'none',
            })}
        >
            <SoftBox
                display={'flex'}
                flexDirection={'column'}
                justifyContent={'center'}
                textAlign={'center'}
                height={'100%'}
                p={3}
            >
                <SoftBox color={'secondary'} mb={0.5}>
                    <Icon fontSize={'inherit'} sx={{ fontWeight: 'bold' }}>
                        {icon}
                    </Icon>
                </SoftBox>
                <SoftTypography variant={title.variant as any} color={'secondary'}>
                    {title.text}
                </SoftTypography>
            </SoftBox>
        </Card>
    );
}

export default PlaceholderCard;
