'use client';
import './globals.css'

import { Inter } from 'next/font/google'
import {AuthContextProvider} from "./context/AuthContext"
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactElement }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>{children}</AuthContextProvider>
      </body>
    </html>
  );
}
