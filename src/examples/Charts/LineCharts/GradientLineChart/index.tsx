import { useRef, useEffect, useMemo, ReactNode, useState } from 'react';

// react-chartjs-2 components
import { Line } from 'react-chartjs-2';

// @mui material components
import { Card } from '@mui/material';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';
import SoftTypography from '~/components/SoftTypography';

// Soft UI Dashboard React helper functions
import gradientChartLine from '~/assets/theme/functions/gradientChartLine';

// GradientLineChart configurations
import configs from './configs';

// Soft UI Dashboard React base styles
import colors from '~/assets/theme/base/colors';

interface ChartData {
    labels: string[];
    datasets: {
        label: string;
        color: 'info' | 'success' | 'warning' | 'error' | 'light' | 'dark';
        data: number[];
    }[];
}

interface GradientLineChartProps {
    title?: string;
    description?: string | ReactNode;
    height?: string | number;
    chart: ChartData;
}

function GradientLineChart({ title = '', description = '', height = '19.125rem', chart }: GradientLineChartProps) {
    const chartRef = useRef<HTMLDivElement>(null);

    const [chartData, setChartData] = useState<any>({});
    const { data, options } = chartData;

    useEffect(() => {
        const chartDatasets =
            chart.datasets && chartRef.current?.children[0]
                ? chart.datasets.map((dataset) => ({
                      ...dataset,
                      tension: 0.4,
                      pointRadius: 0,
                      borderWidth: 3,
                      borderColor: colors[dataset.color] ? colors[dataset.color || 'dark'].main : colors.dark.main,
                      fill: true,
                      maxBarThickness: 6,
                      backgroundColor: chartRef.current?.children[0]
                          ? gradientChartLine(
                                chartRef.current?.children[0],
                                colors[dataset.color] ? colors[dataset.color || 'dark'].main : colors.dark.main,
                            )
                          : undefined,
                  }))
                : [];

        setChartData(configs(chart.labels || [], chartDatasets));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [chart, chartRef.current]);

    const renderChart = (
        <SoftBox p={2}>
            {title || description ? (
                <SoftBox px={description ? 1 : 0} pt={description ? 1 : 0}>
                    {title && (
                        <SoftBox mb={1}>
                            <SoftTypography variant="h6">{title}</SoftTypography>
                        </SoftBox>
                    )}
                    <SoftBox mb={2}>
                        <SoftTypography component="div" variant="button" fontWeight="regular" color="text">
                            {description}
                        </SoftTypography>
                    </SoftBox>
                </SoftBox>
            ) : null}
            {useMemo(
                () => (
                    <SoftBox ref={chartRef} sx={{ height }}>
                        {data && options && <Line data={data} options={options} />}
                    </SoftBox>
                ),
                [data, height, options],
            )}
        </SoftBox>
    );

    return title || description ? <Card>{renderChart}</Card> : renderChart;
}

export default GradientLineChart;
