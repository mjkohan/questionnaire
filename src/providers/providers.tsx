'use client';
import React from "react";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import {ThemeProvider} from "@mui/material/styles";
import theme from "@/theme";

const rtlCache = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
});

export default function Providers({ children }: { children: React.ReactNode }) {
    return (

        <AppRouterCacheProvider>
            <CacheProvider value={rtlCache}>
                <ThemeProvider theme={theme}>

                {children}
                </ThemeProvider>

            </CacheProvider>
        </AppRouterCacheProvider>
    );
}
