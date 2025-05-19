import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import {AppRouterCacheProvider} from '@mui/material-nextjs/v15-appRouter'


export const metadata: Metadata = {
    title: "پرسشنامه",
    description: "ساخته شده با استفاده از Next Js,MUI,Ts,Zustand",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html dir="rtl" lang="fa">
        <body>
        <AppRouterCacheProvider>
            {children}
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
