'use client';

import React, { ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Toaster } from 'react-hot-toast';
import { Provider as ReduxProvider } from 'react-redux';
import { persistor, store } from '../app/redux/index'
import { PersistGate } from 'redux-persist/integration/react';

const Provider = ({ children }: { children: ReactNode }) => {
    const queryClient = new QueryClient()
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <ReduxProvider store={store}>
                    <PersistGate persistor={persistor}>
                        {children}
                    </PersistGate>
                </ReduxProvider>
            </QueryClientProvider>
            <Toaster />
        </div>
    )
}

export default Provider