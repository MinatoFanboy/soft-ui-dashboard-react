import { useContext } from 'react';

import { GlobalContext } from '~/context';

export const useController = () => {
    const context = useContext(GlobalContext);

    if (!context) {
        throw new Error('useController should be used inside the GlobalProvider');
    }

    return context;
};
