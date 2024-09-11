import { ReactNode, useMemo } from 'react';

// react-chartjs-2 components
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, registerables } from 'chart.js';

// @mui material components
import { Card, Grid2 as Grid } from '@mui/material';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';
import SoftTypography from '~/components/SoftTypography';

// Soft UI Dashboard React examples
import BarReportsChartItem from './ReportsBarChartItem';

ChartJS.register(...registerables);

type ChartType = Record<string, any[] | Record<string, any>>;

interface ReportsBarChartProps {
    color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark';
    title: string;
    description?: string | ReactNode;
    chart: ChartType;
    items?: Array<Record<string, any>>;
}

// ReportsBarChart configurations
import configs from './configs';

function ReportsBarChart({ color = 'dark', title, description = '', chart, items = [] }: ReportsBarChartProps) {
    const { data, options } = configs((chart.labels as any) || [], chart.datasets || {});

    const _renderItems = items.map(({ icon, label, progress }) => (
        <Grid size={{ xs: 6, sm: 3 }} key={label}>
            <BarReportsChartItem
                color={color}
                icon={{ color: icon.color, component: icon.component }}
                label={label}
                progress={{ content: progress.content, percentage: progress.percentage }}
            />
        </Grid>
    ));

    return (
        <Card sx={{ height: '100%' }}>
            <SoftBox padding={'1rem'}>
                {useMemo(
                    () => (
                        <SoftBox
                            variant={'gradient'}
                            bgColor={color}
                            borderRadius={'lg'}
                            py={2}
                            pr={0.5}
                            mb={3}
                            height={'12.5rem'}
                        >
                            <Bar data={data} options={options as any} />
                        </SoftBox>
                    ),
                    [color, options, data],
                )}

                <SoftBox px={1}>
                    <SoftBox mb={2}>
                        <SoftTypography variant={'h6'} fontWeight={'medium'} textTransform={'capitalize'}>
                            {title}
                        </SoftTypography>
                        <SoftTypography component={'div'} variant={'button'} color={'text'} fontWeight={'regular'}>
                            {description}
                        </SoftTypography>
                    </SoftBox>
                    <SoftBox py={1} px={0.5}>
                        <Grid container spacing={2}>
                            {_renderItems}
                        </Grid>
                    </SoftBox>
                </SoftBox>
            </SoftBox>
        </Card>
    );
}

export default ReportsBarChart;
