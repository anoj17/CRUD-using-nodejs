'use client';

import React, { ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { Toaster } from 'react-hot-toast';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../app/redux/index'

const Provider = ({ children }: { children: ReactNode }) => {
    const queryClient = new QueryClient()
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                <ReduxProvider store={store}>
                    {children}
                </ReduxProvider>
            </QueryClientProvider>
            <Toaster />
        </div>
    )
}

export default Provider