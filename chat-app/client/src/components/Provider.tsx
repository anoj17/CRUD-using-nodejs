'use client';

import React, { Children, ReactNode } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'

const Provider = ({ children }: {children: ReactNode}) => {
    const queryClient = new QueryClient()
    return (
        <div>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </div>
    )
}

export default Provider