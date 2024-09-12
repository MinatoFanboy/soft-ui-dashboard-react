import { ReactNode, useContext } from 'react';

// @mui material components
import { Icon, Theme } from '@mui/material';

// Soft UI Dashboard React components
import SoftBox from '~/components/SoftBox';
import SoftTypography from '~/components/SoftTypography';
import SoftBadge from '~/components/SoftBadge';

// Timeline context
import { Timeline } from '../context';

// Custom styles for the TimelineItem
import { timelineItem, timelineItemIcon } from './styles';

interface TimelineItemProps {
    color?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'error' | 'dark' | 'light';
    icon: ReactNode;
    title: string;
    dateTime: string;
    description?: string;
    badges?: string[] | number[];
    lastItem?: boolean;
}

function TimelineItem({
    color = 'info',
    icon,
    title,
    dateTime,
    description = '',
    badges = [],
    lastItem = false,
}: TimelineItemProps) {
    const isDark = useContext(Timeline);

    const renderBadges =
        badges.length > 0
            ? badges.map((badge, key) => {
                  const badgeKey = `badge-${key}`;

                  return (
                      <SoftBox key={badgeKey} mr={key === badges.length - 1 ? 0 : 0.5}>
                          <SoftBadge color={color as any} size={'xs'} badgeContent={badge} container />
                      </SoftBox>
                  );
              })
            : null;

    return (
        <SoftBox position={'relative'} sx={(theme: Theme) => timelineItem(theme, { lastItem })}>
            <SoftBox
                bgColor={isDark ? 'dark' : 'white'}
                width={'1.625rem'}
                height={'1.625rem'}
                borderRadius={'50%'}
                position={'absolute'}
                top={'3.25%'}
                left={'2px'}
                zIndex={2}
            >
                <Icon sx={(theme) => timelineItemIcon(theme, { color })}>{icon}</Icon>
            </SoftBox>
            <SoftBox ml={5.75} pt={description ? 0.7 : 0.5} lineHeight={0} maxWidth={'30rem'}>
                <SoftTypography variant={'button'} fontWeight={'medium'} color={isDark ? 'white' : 'dark'}>
                    {title}
                </SoftTypography>
                <SoftBox mt={0.5}>
                    <SoftTypography variant={'caption'} fontWeight={'medium'} color={isDark ? 'secondary' : 'text'}>
                        {dateTime}
                    </SoftTypography>
                </SoftBox>
                <SoftBox mt={2} mb={1.5}>
                    {description ? (
                        <SoftTypography variant={'button'} fontWeight={'regular'} color={'text'}>
                            {description}
                        </SoftTypography>
                    ) : null}
                </SoftBox>
                {badges.length > 0 ? (
                    <SoftBox display={'flex'} pb={lastItem ? 1 : 2}>
                        {renderBadges}
                    </SoftBox>
                ) : null}
            </SoftBox>
        </SoftBox>
    );
}

export default TimelineItem;
