import type { Metadata } from "next";
import "./globals.css";
import Providers from '@/providers/providers';
import React from "react";
export const metadata: Metadata = {
    title: "پرسشنامه",
    description: "ساخته شده با استفاده از Next Js,MUI,Ts,Zustand",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {

    return (
        <html dir="rtl" lang="fa">
        <body>
        <Providers>{children}</Providers>
        </body>
        </html>
    );
}
