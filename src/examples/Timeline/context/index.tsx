import { createContext, ReactNode } from 'react';

// The Timeline main context
export const Timeline = createContext<boolean | undefined>(undefined);

// Timeline context provider
function TimelineProvider({ children, value }: { children: ReactNode; value: boolean }) {
    return <Timeline.Provider value={value}>{children}</Timeline.Provider>;
}

export { TimelineProvider };
