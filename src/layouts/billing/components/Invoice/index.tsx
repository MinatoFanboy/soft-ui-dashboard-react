// @mui material components
import Icon from '@mui/material/Icon';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';
import SoftTypography from '~/components/SoftTypography';

interface InvoiceProps {
    date: string;
    id: string;
    price: string;
    noGutter?: boolean;
}

function Invoice({ date, id, price, noGutter = false }: InvoiceProps) {
    return (
        <SoftBox
            component={'li'}
            display={'flex'}
            justifyContent={'space-between'}
            alignItems={'center'}
            py={1}
            pr={1}
            mb={noGutter ? 0 : 1}
        >
            <SoftBox lineHeight={1}>
                <SoftTypography display={'block'} variant={'button'} fontWeight={'medium'}>
                    {date}
                </SoftTypography>
                <SoftTypography variant={'caption'} fontWeight={'regular'} color={'text'}>
                    {id}
                </SoftTypography>
            </SoftBox>
            <SoftBox display={'flex'} alignItems={'center'}>
                <SoftTypography variant={'button'} fontWeight={'regular'} color={'text'}>
                    {price}
                </SoftTypography>
                <SoftBox display={'flex'} alignItems={'center'} lineHeight={0} ml={3} sx={{ cursor: 'poiner' }}>
                    <Icon fontSize={'small'}>picture_as_pdf</Icon>
                    <SoftTypography variant={'button'} fontWeight={'bold'}>
                        &nbsp;PDF
                    </SoftTypography>
                </SoftBox>
            </SoftBox>
        </SoftBox>
    );
}

export default Invoice;
