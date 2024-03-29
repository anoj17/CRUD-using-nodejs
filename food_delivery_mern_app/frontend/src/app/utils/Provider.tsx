'use client'

import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '../redux/index'

const Provider = ({ children }: { children: ReactNode }) => {
    const client: QueryClient = new QueryClient()
    return (
        <div>
            <QueryClientProvider client={client}>
                <ReduxProvider store={store}>
                    {children}
                </ReduxProvider>
            </QueryClientProvider>
            <Toaster />
        </div>
    )
}

export default Provider