'use client'

import React, { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Toaster } from 'react-hot-toast';

const Provider = ({ children }: { children: ReactNode }) => {
    const client: QueryClient = new QueryClient()
    return (
        <div>
            <QueryClientProvider client={client}>
                {children}
            </QueryClientProvider>
            <Toaster />
        </div>
    )
}

export default Provider