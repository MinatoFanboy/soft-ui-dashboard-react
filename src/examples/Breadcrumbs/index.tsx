import { FC, ReactNode } from 'react';

// react-router-dom components
import { Link } from 'react-router-dom';

// @mui material components
import { Breadcrumbs as MuiBreadcrumbs, Icon } from '@mui/material';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';
import SoftTypography from '~/components/SoftTypography';

interface BreadcrumbsProps {
    icon: ReactNode;
    title: string;
    route: string | string[];
    light?: boolean;
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ icon, title, route, light = false }) => {
    const routes = route.slice(0, -1) as string[];

    return (
        <SoftBox mr={{ xs: 0, xl: 8 }}>
            <MuiBreadcrumbs
                sx={{
                    '& .MuiBreadcrumbs-separator': {
                        color: ({ palette: { white, grey } }) => (light ? white.main : grey[600]),
                    },
                }}
            >
                <Link to={'/'}>
                    <SoftTypography
                        component={'span'}
                        variant={'body2'}
                        color={light ? 'white' : 'dark'}
                        opacity={light ? 0.8 : 0.5}
                        sx={{ lineHeight: 0 }}
                    >
                        <Icon>{icon}</Icon>
                    </SoftTypography>
                </Link>
                {routes.map((el) => (
                    <Link to={`/${el}`} key={el}>
                        <SoftTypography
                            component={'span'}
                            variant={'button'}
                            fontWeight={'regular'}
                            textTransform={'capitalize'}
                            color={light ? 'white' : 'dark'}
                            opacity={light ? 0.8 : 0.5}
                            sx={{ lineHeight: 0 }}
                        >
                            {el}
                        </SoftTypography>
                    </Link>
                ))}
                <SoftTypography
                    variant={'button'}
                    fontWeight={'regular'}
                    textTransform={'capitalize'}
                    color={light ? 'white' : 'dark'}
                    sx={{ lineHeight: 0 }}
                >
                    {title.replace('-', ' ')}
                </SoftTypography>
            </MuiBreadcrumbs>
            <SoftTypography
                fontWeight={'bold'}
                textTransform={'capitalize'}
                variant={'h6'}
                color={light ? 'white' : 'dark'}
                noWrap
            >
                {title.replace('-', ' ')}
            </SoftTypography>
        </SoftBox>
    );
};

export default Breadcrumbs;
