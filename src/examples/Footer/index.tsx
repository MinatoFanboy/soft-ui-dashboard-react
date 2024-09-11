// @mui material components
import { Icon, Link, Theme } from '@mui/material';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';
import SoftTypography from '~/components/SoftTypography';

// Soft UI Dashboard React base styles
import typography from '~/assets/theme/base/typography';

interface FooterItem {
    href: string;
    name: string;
}

function Footer({
    company = { href: 'https://www.creative-tim.com/', name: 'Creative Tim' },
    links = [
        { href: 'https://www.creative-tim.com/', name: 'Creative Tim' },
        { href: 'https://www.creative-tim.com/presentation', name: 'About Us' },
        { href: 'https://www.creative-tim.com/blog', name: 'Blog' },
        { href: 'https://www.creative-tim.com/license', name: 'License' },
    ],
}: {
    company?: FooterItem;
    links?: FooterItem[];
}) {
    const { href, name } = company;
    const { size } = typography;

    const renderLinks = () =>
        links.map((link) => (
            <SoftBox key={link.name} component={'li'} px={2} lineHeight={1}>
                <Link href={link.href} target={'_blank'}>
                    <SoftTypography variant={'button'} fontWeight={'regular'} color={'text'}>
                        {link.name}
                    </SoftTypography>
                </Link>
            </SoftBox>
        ));

    return (
        <SoftBox
            width={'100%'}
            display={'flex'}
            flexDirection={{ xs: 'column', lg: 'row' }}
            justifyContent={'space-between'}
            alignItems={'center'}
            px={1.5}
        >
            <SoftBox
                display={'flex'}
                justifyContent={'center'}
                alignItems={'center'}
                flexWrap={'wrap'}
                color={'text'}
                fontSize={size.sm}
                px={1.5}
            >
                &copy; {new Date().getFullYear()}, made with
                <SoftBox fontSize={size.md} color={'text'} mb={-0.5} mx={0.25}>
                    <Icon color={'inherit'} fontSize={'inherit'}>
                        favorite
                    </Icon>
                </SoftBox>
                by
                <Link href={href} target={'_blank'}>
                    <SoftTypography variant={'button'} fontWeight={'medium'}>
                        &nbsp;{name}&nbsp;
                    </SoftTypography>
                </Link>
                for a better web.
            </SoftBox>
            <SoftBox
                component={'ul'}
                sx={({ breakpoints }: Theme) => ({
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'center',
                    listStyle: 'none',
                    mt: 3,
                    mb: 0,
                    p: 0,

                    [breakpoints.up('lg')]: {
                        mt: 0,
                    },
                })}
            >
                {renderLinks()}
            </SoftBox>
        </SoftBox>
    );
}

export default Footer;
